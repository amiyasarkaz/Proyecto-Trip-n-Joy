<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    public function run(): void
    {
        // 🗑️ VACIAR TODOS LOS USUARIOS EXISTENTES
        User::truncate();
        $this->command->info('🗑️ Todos los usuarios existentes han sido eliminados');

        // ✅ CREAR ADMINISTRADOR
        User::create([
            'name' => 'Administrador',
            'apellido' => 'Sistema',
            'email' => 'admin@admin.com',
            'nif' => '00000000A',
            'pais' => 'España',
            'telefono' => '+34987654321',
            'role' => 'admin',
            'password' => Hash::make('admin123'),
        ]);

        $this->command->info('✅ Administrador creado: admin@admin.com / admin123');

        // ✅ CREAR 5 USUARIOS NORMALES
        $usuariosNormales = [
            [
                'name' => 'María',
                'apellido' => 'García',
                'email' => 'maria.garcia@email.com',
                'nif' => '12345678B',
                'pais' => 'España',
                'telefono' => '+34611223344',
                'role' => 'user',
                'password' => Hash::make('password123'),
            ],
            [
                'name' => 'Carlos',
                'apellido' => 'Rodríguez',
                'email' => 'carlos.rodriguez@email.com',
                'nif' => '87654321C',
                'pais' => 'México',
                'telefono' => '+52551234567',
                'role' => 'user',
                'password' => Hash::make('password123'),
            ],
            [
                'name' => 'Ana',
                'apellido' => 'López',
                'email' => 'ana.lopez@email.com',
                'nif' => '11223344D',
                'pais' => 'Argentina',
                'telefono' => '+54111234567',
                'role' => 'user',
                'password' => Hash::make('password123'),
            ],
            [
                'name' => 'David',
                'apellido' => 'Martínez',
                'email' => 'david.martinez@email.com',
                'nif' => '44332211E',
                'pais' => 'Colombia',
                'telefono' => '+57311234567',
                'role' => 'user',
                'password' => Hash::make('password123'),
            ],
            [
                'name' => 'Laura',
                'apellido' => 'Sánchez',
                'email' => 'laura.sanchez@email.com',
                'nif' => '55667788F',
                'pais' => 'Chile',
                'telefono' => '+56211234567',
                'role' => 'user',
                'password' => Hash::make('password123'),
            ],
        ];

        foreach ($usuariosNormales as $usuario) {
            User::create($usuario);
        }

        $this->command->info('✅ 5 usuarios normales creados con contraseña: password123');
        $this->command->info('📧 Emails de usuarios: maria.garcia@email.com, carlos.rodriguez@email.com, ana.lopez@email.com, david.martinez@email.com, laura.sanchez@email.com');
        $this->command->info('🎯 Total de usuarios creados: 6 (1 admin + 5 usuarios)');
    }
}