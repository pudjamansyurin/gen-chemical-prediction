<?php

namespace App\Http\Controllers;

use App\Http\Requests\FormulaRequest;
use App\Http\Resources\FormulaItem;
use App\Models\Formula;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;

class FormulaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $this->authorize('viewAny', Formula::class);

        [$formulas, $total] = Formula::queried();

        return Inertia::render('Formula/Index', [
            'items' => FormulaItem::collection($formulas),
            'total' => $total,
            // 'matters' => Matter::all()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(FormulaRequest $request)
    {
        Formula::create(array_merge(
            $request->validated(),
            ['user_id' => auth()->id()]
        ));

        return back()->with('status', 'formula-added');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Formula  $formula
     * @return \Illuminate\Http\Response
     */
    public function show(Formula $formula)
    {
        $this->authorize('view', $formula);

        return new FormulaItem($formula->loadRelation());
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Formula  $formula
     * @return \Illuminate\Http\Response
     */
    public function update(FormulaRequest $request, Formula $formula)
    {
        $formula->update($request->validated());

        return back()->with('status', 'formula-updated');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Formula  $formula
     * @return \Illuminate\Http\Response
     */
    public function destroy(Formula $formula)
    {
        $this->authorize('delete', $formula);

        if ($response = Formula::rejectWhenHas($formula->id, 'formulas'))
            throw ValidationException::withMessages($response)
                ->errorBag('formula_delete');

        $formula->delete();

        return back()->with('status', 'formula-deleted');
    }
}
