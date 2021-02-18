<?php

namespace App\Http\Controllers;

use App\Http\Requests\LearnerDatasetRequest;
use App\Http\Resources\EstimatorItem;
use App\Http\Resources\MaterialItem;
use App\Http\Resources\MeasurementItem;
use App\Models\Estimator;
use App\Models\Material;
use App\Models\Measurement;
use App\Traits\LearnerExtension;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Rubix\ML\Datasets\Labeled;

class LearnerController extends Controller
{
    use LearnerExtension;

    public function index()
    {
        return Inertia::render('Learner/Index', [
            'materials' => MaterialItem::collection(Material::with('matter')->get()),
            'measurements' => MeasurementItem::collection(Measurement::all()),
            'estimators' => EstimatorItem::collection(Estimator::all())
        ]);
    }

    public function dataset(LearnerDatasetRequest $request)
    {
        [$data, $dataset] = $this->getDataset($request);

        return back()->with('flash', (object) [
            'shape' => $dataset->shape(),
            'features' => $data->features,
            'dataset' => $dataset->describe()
        ]);
    }

    private function getDataset($request)
    {
        $formulas = $this->getFormulas(
            $request->measurement_id,
            $request->required_materials,
            $request->excluded_materials
        );

        $data = $this->makeData($formulas);
        $dataset = new Labeled($data->samples, $data->labels);
        return [$data, $dataset];
    }
}
