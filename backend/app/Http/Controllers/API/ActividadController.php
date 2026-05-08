<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Actividad;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ActividadController extends Controller
{
    // Obtener todas las actividades
    public function index()
    {
        return Actividad::where('activo', true)->orderBy('destino')->get();
    }

    // Obtener actividad por ID
    public function show($id)
    {
        return Actividad::findOrFail($id);
    }

    // Crear actividad
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'nombre' => 'required|string|max:255',
            'descripcion' => 'required|string',
            'destino' => 'required|string',
            'ciudad' => 'required|string',
            'precio' => 'required|numeric|min:0',
            'duracion' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $actividad = Actividad::create($request->all());

        return response()->json($actividad, 201);
    }

    // Actualizar actividad
    public function update(Request $request, $id)
    {
        $actividad = Actividad::findOrFail($id);

        $validator = Validator::make($request->all(), [
            'nombre' => 'sometimes|string|max:255',
            'descripcion' => 'sometimes|string',
            'destino' => 'sometimes|string',
            'ciudad' => 'sometimes|string',
            'precio' => 'sometimes|numeric|min:0',
            'duracion' => 'sometimes|string',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $actividad->update($request->all());

        return response()->json($actividad);
    }

    // Eliminar actividad (soft delete)
    public function destroy($id)
    {
        $actividad = Actividad::findOrFail($id);
        $actividad->update(['activo' => false]);
        return response()->json(['message' => 'Actividad eliminada correctamente']);
    }
}