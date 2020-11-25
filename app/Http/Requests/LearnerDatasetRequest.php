<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class LearnerDatasetRequest extends FormRequest
{
    protected $errorBag = 'learner_form';

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
            'materials' => [
                'sometimes',
                'array'
            ],
            'materials.*.id' => [
                'required',
                'integer',
                'distinct',
                'exists:materials,id'
            ],
            'measurement_id' => [
                'required',
                'integer',
                'exists:measurements,id'
            ],
        ];
    }

    public function attributes()
    {
        return [
            'materials.*.id' => 'material',
            'measurement_id' => 'measurement',
        ];
    }
}
