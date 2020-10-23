<?php

namespace App\Providers;

use Barryvdh\Debugbar\Facade as Debugbar;
use Illuminate\Database\Schema\Builder;
use Illuminate\Support\Facades\App;
use Illuminate\Support\ServiceProvider;
use Laravel\Sanctum\Sanctum;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        Sanctum::ignoreMigrations();
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        if (App::environment('production')) {
            Debugbar::disable();

            /* Fix cpanel mysql issue */
            Builder::defaultStringLength(191);
        }
    }
}
