<?php

namespace App\Http\Requests;

use App\Models\Measurement;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class MeasurementRequest extends FormRequest
{
    protected $errorBag = 'measurement_form';

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        if ($this->getMethod() == 'PUT')
            return $this->user()->can('update', $this->measurement);
        return $this->user()->can('create', Measurement::class);
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
                Rule::unique('measurements', 'name')->ignore($this->measurement)
            ],
        ];
    }
}
