<?php

namespace App\Policies;

use App\User;
use App\Helpers\Helper;
use Illuminate\Auth\Access\HandlesAuthorization;
use Illuminate\Http\Request;

class UserPolicy
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
        // only admin can view all users
        return $user->can('user.view');
    }

    /**
     * Determine whether the user can create models.
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function create(User $user)
    {
        // only admin can create user
        return $user->can('user.create');
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param  \App\User  $user
     * @param  \App\User  $model
     * @return mixed
     */
    public function update(User $user, User $model)
    {
        // only owner can update
        if ($user->id === $model->id) {
            return true;
        }
        // admin can update all
        return $user->hasRole('admin');
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param  \App\User  $user
     * @param  \App\User  $model
     * @return mixed
     */
    public function delete(User $user, $usersId)
    {
        // user can't delete their profile
        if (in_array($user->id, $usersId)) {
            return false;
        }
        // admin can delete all
        return $user->hasRole('admin');
    }

    /**
     * Determine whether the user can view roles.
     */
    public function role(User $user)
    {
        // only admin can view all roles
        return $user->hasRole('admin');
    }

    /**
     * Determine whether the user update profile.
     */
    public function profile(User $user)
    {
        return $user->id === request('id');
    }
}
