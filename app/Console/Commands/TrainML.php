<?php

namespace App\Console\Commands;

use App\Models\Material;
use App\Models\Measurement;
use Illuminate\Console\Command;
use Rubix\ML\CrossValidation\Metrics\Accuracy;
use Rubix\ML\Datasets\Labeled;
use Rubix\ML\Regressors\KDNeighborsRegressor;
use Rubix\ML\Regressors\KNNRegressor;

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

        $materials = Material::all();
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

        $dataset = $formulas->map(function($formula) use($materials) {
            $sample = $materials->keyBy('id')
                ->map(function($el) use ($formula) {
                    $exist = $formula->materials->firstWhere('id', $el->id);
                    return $exist ? $exist->pivot->value : 0;
                });

            return $sample;
            // $label = $formula->measurements->first()->pivot->value;
            // return $sample->push($label);
        })
        // ->pipe(function($collection) {
        //     $keys = $collection->keys()->filter(function($val, $key) use($collection) {
        //         return $collection->sum($key) > 0;
        //     });

        //     return $collection->map(function($item) use($keys) {
        //         return $item->only($keys);
        //     });
        // })
        ->toArray();

        dd($dataset);

        $this->info("Loading to memory...");
        $dataset = Labeled::fromIterator($dataset);
        [$training, $testing] = $dataset->stratifiedSplit(0.8);

        $this->info("Training...");
        $estimator = new KDNeighborsRegressor();
        $estimator->train($training);

        $this->info("Predicting...");
        $predictions = $estimator->predict($testing);

        $metric = new Accuracy();
        $score = $metric->score($predictions, $testing->labels());
        $this->info("Score: {$score}");

        dd($training);
        // $this->table(array_keys($training))

        // $description = $training->describe();
        // $this->table(array_keys($description[0]), iterator_to_array($description));

        return 0;
    }
}
