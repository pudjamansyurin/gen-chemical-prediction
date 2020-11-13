<?php

namespace App\Observers;

use App\Models\User;
use Spatie\Permission\Models\Role;

class UserObserver
{
    /**
     * Handle the user "updating" event.
     *
     * @param  \App\User  $user
     * @return void
     */
    public function updating(User $user)
    {
        // unverify on email changes
        if ($email = request('email'))
            if ($user->getOriginal('email') != $email)
                $user->email_verified_at = null;
    }

    /**
     * Handle the user "saved" event.
     *
     * @param  \App\User  $user
     * @return void
     */
    public function saved(User $user)
    {
        // update role
        if (auth()->id() != $user->id)
            if ($roleId = request('role_id'))
                if ($role = Role::find($roleId))
                    $user->syncRoles($role);

        // // send email verification
        // if (!$user->hasVerifiedEmail())
        //     $user->sendEmailVerificationNotification();
    }
}
