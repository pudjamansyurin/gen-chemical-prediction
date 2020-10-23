<?php

namespace App\Providers;

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
        // Handle production environment
        if (App::environment('production')) {
            // Fix cpanel database issue
            Builder::defaultStringLength(191);

            // Fix laravel dist production path
            $this->app->bind('path.public', function () {
                $domain = env('APP_PROD_DOMAIN');
                return base_path() . "/../{$domain}";
            });
        }
    }
}
