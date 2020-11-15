<?php

namespace App\Http\Requests;

use App\Traits\Validators\ExtendedValidator;
use Illuminate\Foundation\Http\FormRequest;
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
                'min:0',
                'max:100',
                'not_in:0',
            ],
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
                // $this->validateHasAllRequiredMatters($validator);
            });
        }
    }


    private function validateHasAllRequiredMatters($validator)
    {
        // if ($recipes = request('_recipes')) {
        //     $recipeFormulas = $this->getRecipeableFormulas($recipes);
        //     foreach ($recipeFormulas as $key => $recipeFormula) {
        //         if (Formula::find($recipeFormula['recipeable_id'])->main) {
        //             $target = "_recipes.{$key}.recipeable_id";
        //             $validator->errors()->add($target, "Main formula may not be used as recipe.");
        //         }
        //     }
        // }
    }
}
