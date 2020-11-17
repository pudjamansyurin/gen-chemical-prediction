<?php

namespace App\Http\Resources;

use App\Models\Measurement;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Gate;

class FormulaItem extends JsonResource
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
            'note' => $this->note,

            'materials_count' => $this->materials_count,
            'materials' => MaterialItem::collection($this->whenLoaded('materials')),

            'measurements_count' => $this->measurements_count,
            'measurements' => MeasurementItem::collection($this->whenLoaded('measurements')),

            'updated_at' => $this->updated_at,
            'user' => new UserItem($this->whenLoaded('user')),
            'authorized' => Gate::allows('update', $this->resource)
        ];
    }
}
