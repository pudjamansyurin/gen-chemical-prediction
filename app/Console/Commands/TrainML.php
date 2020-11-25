<?php

namespace App\Console\Commands;

use App\Models\Material;
use App\Models\Measurement;
use Illuminate\Console\Command;
use Rubix\ML\BootstrapAggregator;
use Rubix\ML\CommitteeMachine;
use Rubix\ML\CrossValidation\HoldOut;
use Rubix\ML\CrossValidation\KFold;
use Rubix\ML\CrossValidation\Metrics\Accuracy;
use Rubix\ML\CrossValidation\Metrics\MeanAbsoluteError;
use Rubix\ML\CrossValidation\Metrics\MeanSquaredError;
use Rubix\ML\CrossValidation\Metrics\RSquared;
use Rubix\ML\CrossValidation\Metrics\SMAPE;
use Rubix\ML\CrossValidation\MonteCarlo;
use Rubix\ML\CrossValidation\Reports\ErrorAnalysis;
use Rubix\ML\Datasets\Labeled;
use Rubix\ML\Extractors\CSV;
use Rubix\ML\Other\Loggers\Screen;
use Rubix\ML\Pipeline;
use Rubix\ML\Regressors\Adaline;
use Rubix\ML\Regressors\DummyRegressor;
use Rubix\ML\Regressors\ExtraTreeRegressor;
use Rubix\ML\Regressors\GradientBoost;
use Rubix\ML\Regressors\KDNeighborsRegressor;
use Rubix\ML\Regressors\KNNRegressor;
use Rubix\ML\Regressors\MLPRegressor;
use Rubix\ML\Regressors\RadiusNeighborsRegressor;
use Rubix\ML\Regressors\RegressionTree;
use Rubix\ML\Regressors\Ridge;
use Rubix\ML\Regressors\SVR;
use Rubix\ML\Transformers\L2Normalizer;
use Rubix\ML\Transformers\MinMaxNormalizer;
use Rubix\ML\Transformers\NumericStringConverter;

class TrainML extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'ml:train';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'ML Training';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $this->info("Loading...");
        $formulas = $this->getFormulas('KV 40', ['CV 1103']);

        $data = $this->makeData($formulas);
        // $this->table($data->features, $data->samples);

        $dataset = new Labeled($data->samples, $data->labels);
        // $this->table($data->features, $dataset->samples());
        // dd($dataset->describe());
        // dd($dataset->describeLabels());
        // dd($dataset->numRows(), $dataset->numColumns());

        $estimators = [
            'Adaline' =>                    new Adaline(),
            'ExtraTreeRegressor' =>         new ExtraTreeRegressor(),        // 5.74
            'GradientBoost' =>              new GradientBoost(),             // 8.07
            'KDNeighborsRegressor' =>       new KDNeighborsRegressor(),      // 8.85
            'KNNRegressor' =>               new KNNRegressor(),              // 6.28
            'MLPRegressor' =>               new MLPRegressor(),
            'RadiusNeighborsRegressor' =>   new RadiusNeighborsRegressor(),  // 8.46
            'RegressionTree' =>             new RegressionTree(),            // 7.14
            'Ridge' =>                      new Ridge()                      // 6.79
        ];
        $results = [];

        $this->info("Splitting...");
        [$training, $testing] = $dataset->randomize()->stratifiedSplit(0.8);

        foreach ($estimators as $key => $estimator) {
            $this->info("Algorithm: {$key}");
            $estimator = $estimator;
            $estimator = new BootstrapAggregator($estimator, 100, 0.5);
            // $estimator->setLogger(new Screen());

            $estimator = new Pipeline([
                new NumericStringConverter(),
                new L2Normalizer()
            ], $estimator);

            // $this->info("Validating...");
            // $validator = new KFold(10);
            // $score = $validator->test($estimator, $dataset, new MeanAbsoluteError());
            // dd($score);

            $this->info("Training...");
            $estimator->train($training);

            if (!$estimator->trained()) {
                $this->error('Training failed.');
                return 0;
            }

            // dd($estimator->trained());
            // dd($estimator->experts());
            // dd($estimator->featureImportances());
            // dd($estimator->steps());

            $this->info("Cross-validating...");
            $predictions = $estimator->predict($testing);

            $report = new ErrorAnalysis();
            $result = $report->generate($predictions, $testing->labels());

            $results[$key] = array_merge(
                ['algorithm' => $key],
                iterator_to_array($result)
            );

            // $metric = new MeanAbsoluteError();
            // $score = $metric->score($predictions, $testing->labels());
            // dd($score);
        }

        $this->table(array_keys(reset($results)), $results);

        return 0;
    }

    private function getFormulas($targetName, $baseNames)
    {
        $target = Measurement::where('name', $targetName)->first();
        $bases = collect($baseNames);

        $q = $target->formulas()
            ->with([
                'materials',
                'measurements' => function ($q) use ($target) {
                    $q->where('name', $target->name);
                },
            ]);

        $bases->each(function ($base) use (&$q) {
            $q->whereHas('materials', function ($q) use ($base) {
                $q->where('name', $base);
            });
        });

        return $q->get();
    }

    private function makeData($formulas)
    {
        return $formulas->pipe(function ($items) {
            $features = $items
                ->pluck('materials')
                ->map(function ($item) {
                    return $item->pluck('name');
                })
                ->flatten()
                ->unique()
                ->values();

            $samples = $items
                ->pluck('materials')
                ->map(function ($item) {
                    return $item->pluck('pivot.value', 'name');
                })
                ->map(function ($item) use ($features) {
                    return $features->mapWithKeys(function ($feature) use ($item) {
                        return [$feature => $item->get($feature, 0)];
                    });
                });

            $labels = $items
                ->pluck('measurements.0.pivot.value', 'name');

            return (object) [
                'features' => $features->all(),
                'samples' => $samples->toArray(),
                'labels' => $labels->all()
            ];
        });
    }
}
