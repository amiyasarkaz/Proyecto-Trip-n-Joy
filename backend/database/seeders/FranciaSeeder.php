<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FranciaSeeder extends Seeder
{
    public function run(): void
    {
        $comentarios = [
            [
                'usuario' => 'Elena Gómez',
                'avatar' => 'elena.jpg',
                'puntuacion' => 5,
                'comentario' => 'París siempre enamora. La Torre Eiffel, el Louvre... Perfecto.',
                'destino' => 'Francia',
                'activo' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'usuario' => 'David Ruiz',
                'avatar' => 'david.jpg',
                'puntuacion' => 4,
                'comentario' => 'La Provenza es hermosa. Los campos de lavanda son impresionantes.',
                'destino' => 'Francia',
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