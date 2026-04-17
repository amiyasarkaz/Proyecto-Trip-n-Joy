<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\ValoracionController;

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

// Rutas protegidas (requieren token)
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/user', [AuthController::class, 'user']);
});

Route::post('/api/register', [AuthController::class, 'register']);
Route::post('/api/login', [AuthController::class, 'login']);
Route::post('/api/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');
Route::get('/api/user', [AuthController::class, 'user'])->middleware('auth:sanctum');
Route::post("/api/register", [App\Http\Controllers\API\AuthController::class, "register"]);
Route::get('/valoraciones', [ValoracionController::class, 'index']);
Route::get('/valoraciones/{destino}', [ValoracionController::class, 'getByDestino']);
Route::post('/valoraciones', [ValoracionController::class, 'store'])->middleware('auth:sanctum');