<?php

namespace App\Policies;

use App\Models\Formula;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class FormulaPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view any models.
     *
     * @param  \App\Models\User  $user
     * @return mixed
     */
    public function viewAny(User $user)
    {
        return $user->can('formula.view');
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Formula  $formula
     * @return mixed
     */
    public function view(User $user, Formula $formula)
    {
        return $user->can('formula.view');
    }

    /**
     * Determine whether the user can create models.
     *
     * @param  \App\Models\User  $user
     * @return mixed
     */
    public function create(User $user)
    {
        return $user->can('formula.create');
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Formula  $formula
     * @return mixed
     */
    public function update(User $user, Formula $formula)
    {
        // owner can update
        if ($user->id === $formula->user_id)
            return true;

        return $user->can('formula.force-update');
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Formula  $formula
     * @return mixed
     */
    public function delete(User $user, Formula $formula)
    {
        // owner can delete
        if ($user->id === $formula->user_id)
            return true;

        return $user->can('formula.force-delete');
    }
}
