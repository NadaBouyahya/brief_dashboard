<?php

use App\Http\Controllers\briefController;
use App\Http\Controllers\promotionController;
use App\Http\Controllers\studentController;
use App\Http\Controllers\taskController;
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


// promotion
Route::get('/promotions', [promotionController::class, 'show']);
Route::get('/promotions/{id}', [promotionController::class, 'show_by_id']);

Route::post('promotions', [promotionController::class, 'insert_promo']);

Route::delete('promotions/{id}', [promotionController::class, 'delete_promo']);

Route::put('promotions/{id}', [promotionController::class, 'edit_promo']);

// students
Route::get('/students', [studentController::class, 'show']);
Route::get('/students/{id}', [studentController::class, 'show_by_id']);

Route::post('students', [studentController::class, 'insert_student']);

Route::delete('students/{id}', [studentController::class, 'delete_student']);

Route::put('promotions/{id}', [studentController::class, 'edit_student']);

// briefs
Route::get('/briefs', [briefController::class, 'show']);
Route::get('/briefs/{id}', [briefController::class, 'show_by_id']);

Route::post('briefs', [briefController::class, 'insert_brief']);

Route::delete('briefs/{id}', [briefController::class, 'delete_brief']);

Route::put('briefs/{id}', [briefController::class, 'edit_brief']);

Route::post('/assign_brief/{id_brief}/{id_student}', [briefController::class, 'attachBrief']);

Route::post('/detach_brief/{id_brief}/{id_student}', [briefController::class, 'detachBrief']);

Route::post('/assigned_toAll/{id_brief}', [briefController::class, 'assignAll']);


// tasks
Route::get('/tasks', [taskController::class, 'show']);
Route::get('/tasks/{id}', [taskController::class, 'show_by_id']);

Route::post('tasks', [taskController::class, 'insert_task']);

Route::delete('tasks/{id}', [taskController::class, 'delete_task']);

Route::put('tasks/{id}', [taskController::class, 'edit_task']);
