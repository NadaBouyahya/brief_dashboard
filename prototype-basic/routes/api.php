<?php

use App\Http\Controllers\TodoController;
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

Route::get('/todos', [TodoController::class, 'show']);
Route::get('/todos/{id}', [TodoController::class, 'show_by_id']);

Route::put('insert', [TodoController::class, 'insert_todo']);

Route::delete('delete/{id}', [TodoController::class, 'delete_todo']);

Route::Update('update/{id}', [TodoController::class, 'edit_todo']);
