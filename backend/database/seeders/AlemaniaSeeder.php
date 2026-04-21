<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AlemaniaSeeder extends Seeder
{
    public function run(): void
    {
        $comentarios = [
            [
                'usuario' => 'Javier Rodríguez',
                'avatar' => 'javier.jpg',
                'puntuacion' => 5,
                'comentario' => 'Berlín es una ciudad fascinante. Historia y cultura por todas partes.',
                'destino' => 'Alemania',
                'activo' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'usuario' => 'Laura Sánchez',
                'avatar' => 'laura.jpg',
                'puntuacion' => 4,
                'comentario' => 'Múnich en Navidad es precioso. Los mercadillos son increíbles.',
                'destino' => 'Alemania',
                'activo' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ];

        foreach ($comentarios as $comentario) {
            DB::table('valoracions')->insert($comentario);
        }
    }
}