<?php

namespace App\Http\Controllers;

use App\Http\Requests\MaterialRequest;
use App\Http\Resources\MaterialItem;
use App\Models\Material;
use App\Models\Matter;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;

class MaterialController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $this->authorize('viewAny', Material::class);

        [$materials, $total] = Material::queried();

        return Inertia::render('Material/Index', [
            'items' => MaterialItem::collection($materials),
            'total' => $total,
            'matters' => Matter::getAsList()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(MaterialRequest $request)
    {
        Material::create(array_merge(
            $request->validated(),
            ['user_id' => auth()->id()]
        ));

        return back()->with('status', 'material-added');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Material  $material
     * @return \Illuminate\Http\Response
     */
    public function show(Material $material)
    {
        $this->authorize('view', $material);

        return new MaterialItem($material->loadRelationDetailed());
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Material  $material
     * @return \Illuminate\Http\Response
     */
    public function update(MaterialRequest $request, Material $material)
    {
        $material->update($request->validated());

        return back()->with('status', 'material-updated');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Material  $material
     * @return \Illuminate\Http\Response
     */
    public function destroy(Material $material)
    {
        $this->authorize('delete', $material);

        if ($response = Material::validateRelation($material->id, 'formulas'))
            throw ValidationException::withMessages($response)
                ->errorBag('material_delete');

        $material->delete();

        return back()->with('status', 'material-deleted');
    }
}
