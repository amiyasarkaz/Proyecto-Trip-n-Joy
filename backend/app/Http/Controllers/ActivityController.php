<?php

namespace App\Http\Controllers;

use App\Models\Activity;
use Illuminate\Http\Request;

class ActivityController extends Controller
{
    // Método para EDITAR actividad
    public function update(Request $request, $id)
    {
        // Buscar la actividad
        $activity = Activity::find($id);
        
        // Si no existe, error
        if (!$activity) {
            return response()->json([
                'success' => false,
                'message' => 'Actividad no encontrada'
            ], 404);
        }
        
        // Validar los datos
        $request->validate([
            'name' => 'sometimes|string|max:255',
            'description' => 'nullable|string',
            'price' => 'nullable|numeric',
        ]);
        
        // Actualizar
        $activity->update($request->all());
        
        // Responder
        return response()->json([
            'success' => true,
            'message' => 'Actividad actualizada',
            'data' => $activity
        ]);
    }
}