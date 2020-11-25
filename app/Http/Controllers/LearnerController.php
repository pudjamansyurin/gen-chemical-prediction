<?php

namespace App\Http\Controllers;

use App\Http\Requests\LearnerDatasetRequest;
use App\Http\Resources\MaterialItem;
use App\Http\Resources\MeasurementItem;
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
        ]);
    }

    public function dataset(LearnerDatasetRequest $request)
    {
        [$data, $dataset] = $this->getDataset($request);

        $target = Measurement::find($request->measurement_id);

        return back()->with('flash', (object) [
            'target' => $target,
            'shape' => $dataset->shape(),
            'features' => $data->features,
            'dataset' => $dataset->describe()
        ]);
    }

    private function getDataset($request)
    {
        $formulas = $this->getFormulas(
            $request->measurement_id,
            collect($request->materials)->pluck('id')
        );

        $data = $this->makeData($formulas);

        $dataset = new Labeled($data->samples, $data->labels);

        return [$data, $dataset];
    }
}
