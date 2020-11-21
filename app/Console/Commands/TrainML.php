<?php

namespace App\Console\Commands;

use App\Models\Material;
use App\Models\Measurement;
use Illuminate\Console\Command;
use Rubix\ML\BootstrapAggregator;
use Rubix\ML\CommitteeMachine;
use Rubix\ML\CrossValidation\KFold;
use Rubix\ML\CrossValidation\Metrics\Accuracy;
use Rubix\ML\CrossValidation\Metrics\MeanAbsoluteError;
use Rubix\ML\CrossValidation\Metrics\MeanSquaredError;
use Rubix\ML\CrossValidation\Metrics\RSquared;
use Rubix\ML\CrossValidation\Metrics\SMAPE;
use Rubix\ML\CrossValidation\Reports\ErrorAnalysis;
use Rubix\ML\Datasets\Labeled;
use Rubix\ML\Pipeline;
use Rubix\ML\Regressors\Adaline;
use Rubix\ML\Regressors\ExtraTreeRegressor;
use Rubix\ML\Regressors\GradientBoost;
use Rubix\ML\Regressors\KDNeighborsRegressor;
use Rubix\ML\Regressors\KNNRegressor;
use Rubix\ML\Regressors\RadiusNeighborsRegressor;
use Rubix\ML\Regressors\RegressionTree;
use Rubix\ML\Regressors\Ridge;
use Rubix\ML\Regressors\SVR;
use Rubix\ML\Transformers\L2Normalizer;
use Rubix\ML\Transformers\MinMaxNormalizer;

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
        $bases = collect(['CV 1103']);
        $target = 'KV 40';

        $target = Measurement::where('name', $target)->first();

        $q = $target->formulas()
            ->with([
                'materials',
                'measurements' => function($q) use ($target) {
                    $q->where('name', $target->name);
                },
            ]);
        $bases->each(function($base) use(&$q) {
            $q->whereHas('materials', function($q) use($base) {
                $q->where('name', $base);
            });
        });
        $formulas = $q->get();

        $data = $formulas
            ->pipe(function($items) {
                $features = $items
                                ->pluck('materials')
                                ->map(function($item) {
                                    return $item->pluck('id');
                                })
                                ->flatten()
                                ->unique()
                                ->values()
                                ->sort();

                $samples = $items
                            ->pluck('materials')
                            ->map(function($item) {
                                return $item->pluck('pivot.value', 'id');
                            })
                            ->map(function($item) use($features) {
                                return $features->mapWithKeys(function($feature) use($item) {
                                    return [$feature => $item->get($feature, 0)];
                                });
                            });

                $labels = $items
                            ->pluck('measurements.0.pivot.value');

                return (object) [
                    'features' => $features->all(),
                    'samples' => $samples->toArray(),
                    'labels' => $labels->all()
                ];
            });

        $this->info("Loading to memory...");
        $dataset = new Labeled($data->samples, $data->labels);
        // $this->table($data->features, $data->samples);
        // $this->table($data->features, $dataset->samples());
        // dd($dataset->describe());
        // dd($dataset->describeLabels());

        // $estimator = new ExtraTreeRegressor();
        // $estimator = new BootstrapAggregator($estimator, 10, 0.5);
        $estimator = new CommitteeMachine([
            new Adaline(),
            new ExtraTreeRegressor(),
            new GradientBoost(),
            new KDNeighborsRegressor(),
            new KNNRegressor(),
            new RadiusNeighborsRegressor(),
            new RegressionTree(),
            new Ridge()
        ]);

        $estimator = new Pipeline([
            new L2Normalizer()
        ], $estimator);

        $this->info("Validating...");
        $validator = new KFold(10);
        $score = $validator->test($estimator, $dataset, new SMAPE());
        dd($score);

        $this->info("Splitting...");
        [$training, $testing] = $dataset->randomize()->stratifiedSplit(0.8);

        $this->info("Training...");
        $estimator->train($training);
        // dd($estimator->trained());
        // dd($estimator->experts());
        // dd($estimator->featureImportances());

        $this->info("Predicting...");
        $predictions = $estimator->predict($testing);

        $report = new ErrorAnalysis();
        $results = $report->generate($predictions, $testing->labels());
        dd($results);

        // $metric = new MeanAbsoluteError();
        // $score = $metric->score($predictions, $testing->labels());
        // dd($score);

        return 0;
    }
}
