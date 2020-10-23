<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class UserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => [
                'required',
                'min:3',
                'max:25',
                Rule::unique('users', 'name')->ignore($this->user)
            ],
            'email'   => [
                'required',
                'email',
                Rule::unique('users', 'email')->ignore($this->user)
            ],
            'role_id' => [
                'required',
                'exists:roles,id'
            ],
            'password' => [
                Rule::requiredIf(request()->isMethod('post')),
                'sometimes',
                'min:8',
                'max:25',
                'confirmed'
            ]
        ];
    }

    public function attributes()
    {
        return [
            'role_id' => 'role',
        ];
    }
}
