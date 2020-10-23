<?php

namespace App\Traits\Routines;

use Illuminate\Auth\Notifications\VerifyEmail as NotificationsVerifyEmail;

trait UserRoutine
{
    /**
     * Send the email verification notification.
     *
     * @return void
     */
    public function sendEmailVerificationNotification()
    {
        $this->notify(new NotificationsVerifyEmail());
    }

    /**
     * Record login information
     */
    public function recordLoginInfo()
    {
        $this->withoutEvents(function () {
            $this->forceFill([
                'last_at' => now(),
                'last_ip' => request()->getClientIp()
            ])->save();
        });
    }
}
