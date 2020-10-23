<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::middleware('auth:sanctum')->group(function () {
    Route::apiResource('user', 'UserController', ['except' => ['show']]);
    Route::group(['prefix' => 'profile'], function () {
        Route::get('', 'ProfileController@show');
        Route::put('update', 'ProfileController@update');
    });

    Route::group(['prefix' => 'list'], function () {
        Route::get('role', 'UserController@roles');
    });
});
