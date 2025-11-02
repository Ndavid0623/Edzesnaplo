<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\EdzesController;

Route::post('/workouts', [EdzesController::class, 'store']);
Route::get('/workouts', [EdzesController::class, 'index']);
Route::get('/workouts/type/{type}', [EdzesController::class, 'filterByType']);
Route::get('/workouts/date/{date}', [EdzesController::class, 'filterByMinDuration']);
