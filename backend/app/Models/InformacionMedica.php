<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class InformacionMedica extends Model
{
    use HasFactory;

    protected $table = 'informacion_medica';

    protected $fillable = [
        'pais',
        'descripcion',
        'activo',
    ];
}