<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\FormulaController;
use App\Http\Controllers\LearnerController;
use App\Http\Controllers\MaterialController;
use App\Http\Controllers\MatterController;
use App\Http\Controllers\MeasurementController;
use App\Http\Controllers\ProfileController;
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
    // Route::get('/learner', LearnerController::class);

    Route::apiResource('matter', MatterController::class);
    Route::apiResource('material', MaterialController::class);
    Route::apiResource('measurement', MeasurementController::class);
    Route::apiResource('formula', FormulaController::class);
    Route::apiResource('user', UserController::class);
});
