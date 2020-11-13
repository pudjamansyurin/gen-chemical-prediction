<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Gate;

class MaterialItem extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,

            'matter_id' => $this->matter_id,
            'matter' => new MatterItem($this->whenLoaded('matter')),

            'formulas_count' => $this->formulas_count,
            'formulas' => FormulaItem::collection($this->whenLoaded('formulas')),

            'value' => $this->whenPivotLoaded('formula_material', function () {
                return $this->pivot->value;
            }),

            'updated_at' => $this->updated_at,
            'user' => new UserItem($this->whenLoaded('user')),
            'authorized' => Gate::allows('update', $this->resource)
        ];
    }
}
