<?php

namespace App\Http\Requests;

use App\Models\Matter;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class MatterRequest extends FormRequest
{
    protected $errorBag = 'matter_form';

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        if ($this->getMethod() == 'PUT')
            return $this->user()->can('update', $this->matter);
        return $this->user()->can('create', Matter::class);
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
                Rule::unique('matters', 'name')->ignore($this->matter)
            ],
            'required' => [
                'required',
                'boolean'
            ]
        ];
    }
}
