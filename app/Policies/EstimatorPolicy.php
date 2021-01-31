<?php

namespace App\Policies;

use App\Models\Estimator;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class EstimatorPolicy
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
        return $user->can('estimator.view');
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Estimator  $estimator
     * @return mixed
     */
    public function view(User $user, Estimator $estimator)
    {
        return $user->can('estimator.view');
    }

    // /**
    //  * Determine whether the user can create models.
    //  *
    //  * @param  \App\Models\User  $user
    //  * @return mixed
    //  */
    // public function create(User $user)
    // {
    //     //
    // }

    // /**
    //  * Determine whether the user can update the model.
    //  *
    //  * @param  \App\Models\User  $user
    //  * @param  \App\Models\Estimator  $estimator
    //  * @return mixed
    //  */
    // public function update(User $user, Estimator $estimator)
    // {
    //     //
    // }

    // /**
    //  * Determine whether the user can delete the model.
    //  *
    //  * @param  \App\Models\User  $user
    //  * @param  \App\Models\Estimator  $estimator
    //  * @return mixed
    //  */
    // public function delete(User $user, Estimator $estimator)
    // {
    //     //
    // }
}
