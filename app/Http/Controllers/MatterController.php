<?php

namespace App\Http\Controllers;

use App\Http\Requests\MatterRequest;
use App\Http\Resources\MatterItem;
use App\Models\Matter;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MatterController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $this->authorize('viewAny', Matter::class);

        [$matters, $total] = Matter::queried();

        return Inertia::render('Matter/Index', [
            'items' => MatterItem::collection($matters),
            'total' => $total,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(MatterRequest $request)
    {
        Matter::create($request->validated());

        return back()->with('status', 'matter-added');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Matter  $matter
     * @return \Illuminate\Http\Response
     */
    public function show(Matter $matter)
    {
        $this->authorize('view', $matter);

        return new MatterItem($matter->loadRelation());
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Matter  $matter
     * @return \Illuminate\Http\Response
     */
    public function update(MatterRequest $request, Matter $matter)
    {
        $matter->update($request->validated());

        return back()->with('status', 'matter-updated');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Matter  $matter
     * @return \Illuminate\Http\Response
     */
    public function destroy(Matter $matter)
    {
        $this->authorize('delete', $matter);

        // check
        // if ($response = Matter::rejectWhenHas($mattersId, [])) {
        //     return $response;
        // }

        // delete
        $matter->delete();

        return back()->with('status', 'matter-deleted');
    }
}
