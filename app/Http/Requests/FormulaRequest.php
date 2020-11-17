<?php

namespace App\Http\Requests;

use App\Models\Material;
use App\Models\Matter;
use App\Traits\Validators\ExtendedValidator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Arr;
use Illuminate\Validation\Rule;

class FormulaRequest extends FormRequest
{
    use ExtendedValidator;

    protected $errorBag = 'formula_form';

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        if ($this->formula)
            return $this->user()->can('update', $this->formula);
        return $this->user()->can('create', Formula::class);
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
                Rule::unique('formulas', 'name')->ignore($this->formula)
            ],
            'note' => [
                'nullable',
                'string',
                'max:100',
            ],
            'materials' => [
                'required',
                'array'
            ],
            'materials.*.id' => [
                'required',
                'integer',
                'distinct',
                'exists:materials,id'
            ],
            'materials.*.value' => [
                'required',
                'numeric',
                'min:0',
                'max:100',
                'not_in:0',
            ],
            'measurements' => [
                'required',
                'array'
            ],
            'measurements.*.id' => [
                'required',
                'integer',
                'distinct',
                'exists:measurements,id'
            ],
            'measurements.*.value' => [
                'required',
                'numeric',
                'not_in:0',
            ],
        ];
    }

    public function attributes()
    {
        return [
            'materials.*.id' => 'material',
            'materials.*.value' => 'portion',
            'measurements.*.id' => 'measurement',
            'measurements.*.value' => 'value',
        ];
    }

    /**
     * Configure the validator instance.
     *
     * @param  \Illuminate\Validation\Validator  $validator
     * @return void
     */
    public function withValidator($validator)
    {
        if (!$validator->fails()) {
            $validator->after(function ($validator) {
                $this->validateSum($validator, 'materials', 'value', 100);
                $this->validateHasAllRequiredMatters($validator);
            });
        }
    }

    private function validateHasAllRequiredMatters($validator)
    {
        if ($materials = request('materials')) {
            $requiredMatters = Matter::whereRequired(1)->get();
            $materials = Material::find(Arr::pluck($materials, 'id'));

            $requiredMatters->each(function ($matter) use ($validator, $materials) {
                if (!$materials->firstWhere('matter_id', $matter->id)) {
                    $validator->errors()->add("materials", "Use at least 1 {$matter->name} material.");
                }
            });
        }
    }
}
