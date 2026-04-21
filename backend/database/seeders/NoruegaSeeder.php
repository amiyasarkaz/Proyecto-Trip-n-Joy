<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class NoruegaSeeder extends Seeder
{
    public function run(): void
    {
        $comentarios = [
            [
                'usuario' => 'María García',
                'avatar' => 'maria.jpg',
                'puntuacion' => 5,
                'comentario' => 'Los fiordos noruegos son espectaculares. Una experiencia única en la vida.',
                'destino' => 'Noruega',
                'activo' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'usuario' => 'Carlos López',
                'avatar' => 'carlos.jpg',
                'puntuacion' => 4,
                'comentario' => 'Muy buen viaje, aunque el clima no acompañó del todo.',
                'destino' => 'Noruega',
                'activo' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'usuario' => 'Ana Martínez',
                'avatar' => 'ana.jpg',
                'puntuacion' => 5,
                'comentario' => 'Las auroras boreales son mágicas. Volveré sin duda.',
                'destino' => 'Noruega',
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