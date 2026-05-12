<?php


use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\ValoracionController;
use App\Http\Controllers\API\ActividadController;

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

// Rutas protegidas (requieren token)
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/user', [AuthController::class, 'user']);
    Route::put('/user/update', [AuthController::class, 'update']);
    Route::get('/usuarios', [AuthController::class, 'getUsuarios']);
    Route::delete('/usuario/{id}', [AuthController::class, 'eliminarUsuario']); // ✅ Dar de baja
});

Route::get('/valoraciones', [ValoracionController::class, 'index']);
Route::get('/valoraciones/{destino}', [ValoracionController::class, 'getByDestino']);
Route::post('/valoraciones', [ValoracionController::class, 'store'])->middleware('auth:sanctum');

Route::get('/actividades', [ActividadController::class, 'index']);
Route::get('/actividades/{id}', [ActividadController::class, 'show']);
Route::post('/actividades', [ActividadController::class, 'store'])->middleware('auth:sanctum');
Route::put('/actividades/{id}', [ActividadController::class, 'update'])->middleware('auth:sanctum');
Route::delete('/actividades/{id}', [ActividadController::class, 'destroy'])->middleware('auth:sanctum');