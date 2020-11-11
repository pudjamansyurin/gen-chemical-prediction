<?php

namespace App\Policies;

use App\Models\Material;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class MaterialPolicy
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
        return $user->can('material.view');
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param  \App\User  $user
     * @param  \App\Material  $material
     * @return mixed
     */
    public function view(User $user, Material $material)
    {
        return $user->can('material.view');
    }

    /**
     * Determine whether the user can create models.
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function create(User $user)
    {
        return $user->can('material.create');
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param  \App\User  $user
     * @param  \App\Material  $material
     * @return mixed
     */
    public function update(User $user, Material $material)
    {
        // owner can update
        if ($user->id === $material->user_id)
            return true;

        return $user->can('material.force-update');
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param  \App\User  $user
     * @param  \App\Material  $material
     * @return mixed
     */
    public function delete(User $user, Material $material)
    {
        // owner can delete
        if ($user->id === $material->user_id)
            return true;

        return $user->can('material.force-delete');
    }
}
