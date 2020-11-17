<?php

namespace App\Providers;

use App\Models\Formula;
use App\Models\User;
use App\Observers\FormulaObserver;
use App\Observers\UserObserver;
use Illuminate\Support\ServiceProvider;

class ObserverServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        User::observe(UserObserver::class);
        Formula::observe(FormulaObserver::class);
    }
}
