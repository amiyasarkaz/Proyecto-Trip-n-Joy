<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Valoracion;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class ValoracionController extends Controller
{
    // Obtener todas las valoraciones activas
    public function index()
    {
        $valoraciones = Valoracion::where('activo', true)
            ->orderBy('created_at', 'desc')
            ->get();
        
        return response()->json($valoraciones);
    }

    // Obtener valoraciones por destino
    public function getByDestino($destino)
    {
        $valoraciones = Valoracion::where('destino', $destino)
            ->where('activo', true)
            ->orderBy('created_at', 'desc')
            ->get();
        
        return response()->json($valoraciones);
    }

    // Crear una nueva valoración (comentario de usuario)
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'comentario' => 'required|string|min:5|max:1000',
            'puntuacion' => 'required|integer|min:1|max:5',
            'destino' => 'required|string|max:100',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors()
            ], 422);
        }

        $valoracion = Valoracion::create([
            'usuario' => Auth::user()->name ?? 'Usuario',
            'avatar' => null,
            'puntuacion' => $request->puntuacion,
            'comentario' => $request->comentario,
            'destino' => $request->destino,
            'activo' => true,
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Comentario guardado correctamente',
            'data' => $valoracion
        ], 201);
    }
}