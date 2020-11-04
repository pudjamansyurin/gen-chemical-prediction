<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return redirect()->route('login');
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'show'])->name('dashboard');

    // Route::get('/user', [UserController::class, 'index'])->name('user.index');
    // Route::get('/user/{user}', [UserController::class, 'show'])->name('user.show');
    // Route::post('/user', [UserController::class, 'store'])->name('user.store');
    // Route::put('/user/{user}', [UserController::class, 'update'])->name('user.update');

    Route::resource('user', UserController::class, [
        // 'except' => [],
        // 'only' => []
    ]);
});
