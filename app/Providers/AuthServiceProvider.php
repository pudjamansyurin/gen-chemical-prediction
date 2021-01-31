<?php

namespace App\Providers;

use App\Models\Estimator;
use App\Models\Formula;
use App\Models\Material;
use App\Models\Matter;
use App\Models\Measurement;
use App\Models\User;
use App\Policies\EstimatorPolicy;
use App\Policies\FormulaPolicy;
use App\Policies\MaterialPolicy;
use App\Policies\MatterPolicy;
use App\Policies\MeasurementPolicy;
use App\Policies\UserPolicy;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        Matter::class => MatterPolicy::class,
        Material::class => MaterialPolicy::class,
        Measurement::class => MeasurementPolicy::class,
        Formula::class => FormulaPolicy::class,
        Estimator::class => EstimatorPolicy::class,
        User::class => UserPolicy::class,
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        //
    }
}
