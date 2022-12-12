<?php

use App\Http\Controllers\promotionController;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/promotions', [promotionController::class, 'show']);
Route::get('/promotions/{id}', [promotionController::class, 'show_by_id']);

Route::post('promotions', [promotionController::class, 'insert_promo']);

Route::delete('promotions/{id}', [promotionController::class, 'delete_promo']);

Route::put('promotions/{id}', [promotionController::class, 'edit_promo']);