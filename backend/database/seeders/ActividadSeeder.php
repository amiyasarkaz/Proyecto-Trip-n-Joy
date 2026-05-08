<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ActividadSeeder extends Seeder
{
    public function run(): void
    {
        $actividades = [
            [
                'nombre' => 'Montañismo',
                'descripcion' => 'Recorrido por los Alpes Bávaros',
                'destino' => 'Alemania',
                'ciudad' => 'Munich',
                'precio' => 89.99,
                'duracion' => '4 horas',
                'imagen' => '/actividad1.png',
                'fecha_inicio' => '2026-04-15',
                'activo' => true,
            ],
            [
                'nombre' => 'Ciclismo',
                'descripcion' => 'Ciclismo por las calles de París',
                'destino' => 'Francia',
                'ciudad' => 'Paris',
                'precio' => 45.00,
                'duracion' => '3 horas',
                'imagen' => '/actividad2.png',
                'fecha_inicio' => '2026-04-21',
                'activo' => true,
            ],
            [
                'nombre' => 'Auroras Boreales',
                'descripcion' => 'Avistamiento de auroras boreales en Islandia',
                'destino' => 'Islandia',
                'ciudad' => 'Reykjavik',
                'precio' => 150.00,
                'duracion' => '5 horas',
                'imagen' => '/actividad3.png',
                'fecha_inicio' => '2026-04-25',
                'activo' => true,
            ],
            [
                'nombre' => 'Maravillas del Mundo',
                'descripcion' => 'Explorar la ciudadela inca de Machu Picchu',
                'destino' => 'Perú',
                'ciudad' => 'Cusco',
                'precio' => 200.00,
                'duracion' => '8 horas',
                'imagen' => '/actividad4.png',
                'fecha_inicio' => '2026-05-02',
                'activo' => true,
            ],
            [
                'nombre' => 'Ballenas en Noruega',
                'descripcion' => 'Safaris de ballenas en Noruega',
                'destino' => 'Noruega',
                'ciudad' => 'Tromsø',
                'precio' => 120.00,
                'duracion' => '4 horas',
                'imagen' => '/actividad5.png',
                'fecha_inicio' => '2026-12-05',
                'activo' => true,
            ],
            [
                'nombre' => 'Visita al Louvre',
                'descripcion' => 'Visita guiada al museo del Louvre',
                'destino' => 'Francia',
                'ciudad' => 'Paris',
                'precio' => 35.00,
                'duracion' => '2 horas',
                'imagen' => '/actividad6.png',
                'fecha_inicio' => '2026-06-08',
                'activo' => true,
            ],
        ];

        foreach ($actividades as $actividad) {
            DB::table('actividades')->insert(array_merge($actividad, [
                'created_at' => now(),
                'updated_at' => now(),
            ]));
        }
    }
}