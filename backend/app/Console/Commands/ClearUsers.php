<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class ClearUsers extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:clear-users';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Vaciar completamente la tabla de usuarios';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        if ($this->confirm('¿Estás seguro de que quieres eliminar TODOS los usuarios? Esta acción no se puede deshacer.')) {
            $count = \App\Models\User::count();
            \App\Models\User::truncate();

            $this->info("🗑️ Se han eliminado {$count} usuarios de la base de datos.");
            $this->warn('⚠️ La tabla de usuarios está ahora vacía.');
        } else {
            $this->info('❌ Operación cancelada.');
        }
    }
}
