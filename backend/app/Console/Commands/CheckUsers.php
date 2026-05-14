<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class CheckUsers extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:check-users';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Mostrar todos los usuarios registrados';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $users = \App\Models\User::all();

        $this->info('📊 Total de usuarios: ' . $users->count());
        $this->newLine();

        if ($users->count() > 0) {
            $this->info('👥 Lista de usuarios:');
            $this->table(
                ['ID', 'Nombre', 'Apellido', 'Email', 'Rol', 'País'],
                $users->map(function ($user) {
                    return [
                        $user->id,
                        $user->name,
                        $user->apellido,
                        $user->email,
                        $user->role,
                        $user->pais ?? 'N/A'
                    ];
                })
            );
        } else {
            $this->warn('No hay usuarios registrados.');
        }
    }
}
