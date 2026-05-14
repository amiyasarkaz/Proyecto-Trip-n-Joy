<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class InformacionMedicaSeeder extends Seeder
{
    public function run(): void
    {
        $datos = [
            [
                'pais' => 'Alemania',
                'descripcion' => 'Es obligatorio contar con un seguro de salud válido en el país que cubra enfermedades y accidentes durante toda la estancia. Infórmate con al menos 12 semanas de anticipación.',
                'activo' => true,
            ],
            [
                'pais' => 'Francia',
                'descripcion' => 'No exige vacunas obligatorias, aunque se recomienda tener el calendario al día. Si visitas territorios de ultramar, consulta sobre prevención de malaria. Lleva tu Tarjeta Sanitaria Europea si eres de la UE y un seguro de viaje complementario.',
                'activo' => true,
            ],
            [
                'pais' => 'Noruega',
                'descripcion' => 'Sin vacunas obligatorias. Recomiendan precaución por garrapatas (encefalitis) en zonas costeras del sur. Obligatorio seguro médico Schengen (mínimo 30.000€). Llevar Tarjeta Sanitaria Europea si eres de la UE. Contrata seguro con cobertura de rescate en montaña.',
                'activo' => true,
            ],
        ];

        foreach ($datos as $dato) {
            DB::table('informacion_medica')->insert(array_merge($dato, [
                'created_at' => now(),
                'updated_at' => now(),
            ]));
        }
    }
}