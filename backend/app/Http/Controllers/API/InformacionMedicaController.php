<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\InformacionMedica;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class InformacionMedicaController extends Controller
{
    public function index()
    {
        return InformacionMedica::where('activo', true)->get();
    }

    public function update(Request $request, $id)
    {
        $informacion = InformacionMedica::findOrFail($id);

        $validator = Validator::make($request->all(), [
            'descripcion' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $informacion->update(['descripcion' => $request->descripcion]);

        return response()->json($informacion);
    }
}