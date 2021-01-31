<?php

namespace App\Http\Controllers;

use App\Http\Resources\EstimatorItem;
use App\Models\Estimator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;

class EstimatorController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $this->authorize('viewAny', Estimator::class);

        [$items, $total] = Estimator::queried();

        return Inertia::render('Estimator/Index', [
            'items' => EstimatorItem::collection($items),
            'total' => $total,
            'canCreate' => Gate::allows('create', Estimator::class)
        ]);
    }

    // /**
    //  * Store a newly created resource in storage.
    //  *
    //  * @param  \Illuminate\Http\Request  $request
    //  * @return \Illuminate\Http\Response
    //  */
    // public function store(Request $request)
    // {
    //     //
    // }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Estimator  $estimator
     * @return \Illuminate\Http\Response
     */
    public function show(Estimator $estimator)
    {
        $this->authorize('view', $estimator);

        return new EstimatorItem($estimator->loadRelationDetailed());
    }

    // /**
    //  * Update the specified resource in storage.
    //  *
    //  * @param  \Illuminate\Http\Request  $request
    //  * @param  \App\Models\Estimator  $estimator
    //  * @return \Illuminate\Http\Response
    //  */
    // public function update(Request $request, Estimator $estimator)
    // {
    //     //
    // }

    // /**
    //  * Remove the specified resource from storage.
    //  *
    //  * @param  \App\Models\Estimator  $estimator
    //  * @return \Illuminate\Http\Response
    //  */
    // public function destroy(Estimator $estimator)
    // {
    //     //
    // }
}
