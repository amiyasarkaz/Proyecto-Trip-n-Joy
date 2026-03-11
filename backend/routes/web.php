<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

// ===== RUTAS PARA ANGULAR =====
Route::get('/api/test', function() {
    return response()->json([
        'message' => 'Conexión exitosa entre Angular y Laravel',
        'status' => 'ok',
        'timestamp' => now()->toDateTimeString()
    ]);
});

Route::get('/api/db-test', function() {
    try {
        $users = DB::table('users')->count();
        return response()->json([
            'message' => 'Base de datos conectada',
            'users_count' => $users,
            'status' => 'ok'
        ]);
    } catch (\Exception $e) {
        return response()->json([
            'message' => 'Error de base de datos',
            'error' => $e->getMessage(),
            'status' => 'error'
        ], 500);
    }
});