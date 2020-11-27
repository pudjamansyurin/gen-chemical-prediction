<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class LearnerDatasetRequest extends FormRequest
{
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
                'array'
            ],
            'required_materials.*.id' => [
                'required',
                'integer',
                'distinct',
                'exists:materials,id'
            ],
            'excluded_materials' => [
                'sometimes',
                'array'
            ],
            'excluded_materials.*.id' => [
                'required',
                'integer',
                'distinct',
                'exists:materials,id'
            ],
        ];
    }

    public function attributes()
    {
        return [
            'measurement_id' => 'measurement',
            'required_materials.*.id' => 'required_material',
            'excluded_materials.*.id' => 'excluded_material',
        ];
    }
}
