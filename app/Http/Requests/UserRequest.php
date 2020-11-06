<?php

namespace App\Http\Requests;

use App\Actions\Fortify\PasswordValidationRules;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UserRequest extends FormRequest
{
    use PasswordValidationRules;

    protected $errorBag = 'userForm';

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
        $user = $this->user ?: auth()->user();

        return [
            'name' => [
                'required',
                'min:3',
                'max:25',
                Rule::unique('users', 'name')->ignore($user)
            ],
            'email'   => [
                'required',
                'email',
                Rule::unique('users', 'email')->ignore($user)
            ],
            'role_id' => [
                'required',
                'exists:roles,id'
            ],
            'password' => $this->passwordRules()
        ];
    }


    public function attributes()
    {
        return [
            'role_id' => 'role',
        ];
    }
}
