<?php

namespace App\Http\Middleware;

use App\Http\Resources\UserItem;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    public function version(Request $request)
    {
        return parent::version($request);
    }

    /**
     * Defines the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function share(Request $request)
    {
        // return array_merge(parent::share($request), [
        return [

            // 'appName' => config('app.name'),

            'status' => function () {
                return Session::get('status');
            },

            'flash' => function () {
                return Session::get('flash');
            },

            'profile' => function () use ($request) {
                if ($user = $request->user()) {
                    return new UserItem($user->loadRelation());
                }
                return null;
            }
        ];
    }
}
