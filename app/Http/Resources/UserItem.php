<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

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
            'email_verified_at' => $this->email_verified_at,

            'role_id' => $role->id,
            'role' => $role,

            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            // 'authorized' => $this->id != auth()->id(),
        ];
    }
}
