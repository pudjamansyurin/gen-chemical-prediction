<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Gate;

class UserItem extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $role = $this->roles->first();

        return [
            'id' => $this->id,
            'name' => $this->name,
            'email' => $this->email,
            'verified' => $this->hasVerifiedEmail(),

            'role_id' => $role->id,
            'role' => $role,

            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            'authorized' => Gate::allows('delete', $this->resource)
        ];
    }
}
