<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ValoracionSeeder extends Seeder
{
    public function run(): void
    {
        $valoraciones = [
            [
                'usuario' => 'pao4579',
                'avatar' => 'rossi.jfif',
                'puntuacion' => 4,
                'comentario' => 'La casa tiene mucho encanto y tenía una buena habitación con una bonita vista. La ubicación es bastante buena porque hay muchos autobuses.',
                'destino' => 'Noruega',
            ],
            [
                'usuario' => 'maria89',
                'avatar' => 'Pogra.webp',
                'puntuacion' => 5,
                'comentario' => 'Excelente experiencia. El guía fue muy amable y los paisajes espectaculares.',
                'destino' => 'Noruega',
            ],
            [
                'usuario' => 'carlos23',
                'avatar' => 'surtr.webp',
                'puntuacion' => 5,
                'comentario' => 'Los fiordos noruegos son impresionantes. Muy recomendable.',
                'destino' => 'Noruega',
            ],
            [
                'usuario' => 'ana_lopez',
                'avatar' => 'alesh.webp',
                'puntuacion' => 4,
                'comentario' => 'Bien organizado, aunque el clima no acompañó mucho.',
                'destino' => 'Alemania',
            ],
            [
                'usuario' => 'javi_rodri',
                'avatar' => 'last.webp',
                'puntuacion' => 5,
                'comentario' => 'Berlín es increíble. La historia y la cultura son fascinantes.',
                'destino' => 'Alemania',
            ],
            [
                'usuario' => 'lau_sanchez',
                'avatar' => 'endmin.webp',
                'puntuacion' => 5,
                'comentario' => 'París siempre enamora. Volveré sin duda.',
                'destino' => 'Francia',
            ],
        ];

        foreach ($valoraciones as $valoracion) {
            DB::table('valoracions')->insert([
                'usuario' => $valoracion['usuario'],
                'avatar' => $valoracion['avatar'],
                'puntuacion' => $valoracion['puntuacion'],
                'comentario' => $valoracion['comentario'],
                'destino' => $valoracion['destino'],
                'activo' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
