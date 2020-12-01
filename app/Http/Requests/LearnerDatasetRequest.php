<?php

namespace App\Http\Requests;

use App\Traits\Validators\ValidatorExtension;
use Illuminate\Foundation\Http\FormRequest;

class LearnerDatasetRequest extends FormRequest
{
    use ValidatorExtension;

    protected $errorBag = 'learner_dataset';

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
            'measurement_id' => [
                'required',
                'integer',
                'exists:measurements,id'
            ],
            'requred_materials' => [
                'sometimes',
                'array',
                'distinct',
                'exists:materials,id'
            ],
            'excluded_materials' => [
                'sometimes',
                'array',
                'distinct',
                'exists:materials,id'
            ],
        ];
    }

    public function attributes()
    {
        return [
            'measurement_id' => 'measurement',
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
                $this->validateDistinctTwoArrays($validator, 'required_materials', 'excluded_materials');
            });
        }
    }
}
