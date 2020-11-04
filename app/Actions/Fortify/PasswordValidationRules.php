<?php

namespace App\Actions\Fortify;

use Laravel\Fortify\Rules\Password;

trait PasswordValidationRules
{
    /**
     * Get the validation rules used to validate passwords.
     *
     * @return array
     */
    protected function passwordRules()
    {
        return [
            'required',
            'string',
            $this->passwordRule(),
            'confirmed'
        ];
    }

    protected function passwordRule()
    {
        return (new Password)
            ->length(8)
            ->requireUppercase()
            ->requireNumeric()
            ->requireSpecialCharacter();
    }
}
