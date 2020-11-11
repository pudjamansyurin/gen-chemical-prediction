<?php

namespace App\Policies;

use App\Models\Matter;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class MatterPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view any models.
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function viewAny(User $user)
    {
        return $user->can('matter.view');
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\User  $model
     * @return mixed
     */
    public function view(User $user, Matter $matter)
    {
        return $user->can('matter.view');
    }

    /**
     * Determine whether the user can create models.
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function create(User $user)
    {
        return $user->can('matter.create');
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param  \App\User  $user
     * @param  \App\Matter  $matter
     * @return mixed
     */
    public function update(User $user, Matter $matter)
    {
        // owner can update
        if ($user->id === $matter->user_id)
            return true;

        return $user->can('matter.force-update');
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param  \App\User  $user
     * @param  \App\Matter  $matter
     * @return mixed
     */
    public function delete(User $user, Matter $matter)
    {
        // owner can delete
        if ($user->id === $matter->user_id)
            return true;

        return $user->can('matter.force-delete');
    }
}
