<?php

use App\Http\Controllers\Auth\ConfirmPasswordController;
use App\Http\Controllers\Auth\ForgotPasswordController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\ResetPasswordController;
use App\Http\Controllers\Auth\VerificationController;
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

// Auth::routes();

Route::post('login', [LoginController::class, 'login'])->name('login');
Route::post('logout', [LoginController::class, 'logout'])->name('logout');
Route::prefix('password')->group(function () {
    Route::post('email', [ForgotPasswordController::class, 'sendResetLinkEmail'])->name('password.email');
    Route::post('reset', [ResetPasswordController::class, 'reset'])->name('password.update');
    // Route::post('confirm', [ConfirmPasswordController::class, 'confirm'])->name('password.confirm');
});

// Route::prefix('email')->group(function () {
//     Route::get('verify/{id}/{hash}', [VerificationController::class, 'verify'])->name('verification.verify');
//     Route::post('resend', [VerificationController::class, 'resend'])->name('verification.resend');
// });

// Route::group(['domain' => env('APP_URL')], function () {
//     Route::get('email/verify/{id}/{hash}',  [VerificationController::class, 'verify'])->name('verification.address');
// });

Route::view('/{any}', 'spa')->where('any', '.*');
