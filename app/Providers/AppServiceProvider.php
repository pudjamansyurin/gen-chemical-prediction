<?php

namespace App\Providers;

use Illuminate\Database\Schema\Builder;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\App;
use Illuminate\Support\ServiceProvider;
use Laravel\Fortify\Fortify;
use Laravel\Jetstream\Jetstream;
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
        JsonResource::withoutWrapping();

        /* Production condition */
        if (App::environment('production')) {
            /* Fix cpanel mysql issue */
            Builder::defaultStringLength(191);

            /* Fix laravel-mix manifest issue */
            $this->app->bind('path.public', function () {
                $domain = env('APP_PROD_DOMAIN');
                return base_path() . "/../{$domain}";
            });
        }
    }
}
