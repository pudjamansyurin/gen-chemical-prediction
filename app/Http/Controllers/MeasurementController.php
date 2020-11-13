<?php

namespace App\Http\Controllers;

use App\Http\Requests\MeasurementRequest;
use App\Models\Measurement;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;

class MeasurementController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $this->authorize('viewAny', Measurement::class);

        [$measurements, $total] = Measurement::queried();

        return Inertia::render('Measurement/Index', [
            'items' => MeasurementItem::collection($measurements),
            'total' => $total,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(MeasurementRequest $request)
    {
        Measurement::create(array_merge(
            $request->validated(),
            ['user_id' => auth()->id()]
        ));

        return back()->with('status', 'measurement-added');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Measurement  $measurement
     * @return \Illuminate\Http\Response
     */
    public function show(Measurement $measurement)
    {
        $this->authorize('view', $measurement);

        return new MeasurementItem($measurement->loadRelation());
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Measurement  $measurement
     * @return \Illuminate\Http\Response
     */
    public function update(MeasurementRequest $request, Measurement $measurement)
    {
        $measurement->update($request->validated());

        return back()->with('status', 'measurement-updated');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Measurement  $measurement
     * @return \Illuminate\Http\Response
     */
    public function destroy(Measurement $measurement)
    {
        $this->authorize('delete', $measurement);

        if ($response = Measurement::rejectWhenHas($measurement->id, 'materials'))
            throw ValidationException::withMessages($response)
                ->errorBag('measurement_delete');

        $measurement->delete();

        return back()->with('status', 'measurement-deleted');
    }
}
