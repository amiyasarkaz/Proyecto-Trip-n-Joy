<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;

Route::get('/', function () {
    return view('welcome');
});

// RUTAS DE API TEMPORALES (hasta que api.php funcione)

