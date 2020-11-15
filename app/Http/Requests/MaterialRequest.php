<?php

namespace App\Http\Requests;

use App\Models\Material;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class MaterialRequest extends FormRequest
{
    protected $errorBag = 'material_form';

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        if ($this->material)
            return $this->user()->can('update', $this->material);
        return $this->user()->can('create', Material::class);
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
                Rule::unique('materials', 'name')->ignore($this->material)
            ],
            'matter_id' => [
                'required',
                'integer',
                'exists:matters,id'
            ],
        ];
    }

    public function attributes()
    {
        return [
            'matter_id' => 'matter',
        ];
    }
}
