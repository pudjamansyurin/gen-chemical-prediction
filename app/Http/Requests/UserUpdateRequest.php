<?php

namespace App\Http\Requests;

use Illuminate\Support\Arr;

class UserUpdateRequest extends UserRequest
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        if (request()->boolean('change_password')) {
            return parent::rules();
        }

        return Arr::except(parent::rules(), 'password');
    }
}
