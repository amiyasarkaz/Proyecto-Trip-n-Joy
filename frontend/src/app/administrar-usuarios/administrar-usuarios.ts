import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-administrar-usuarios',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './administrar-usuarios.html',
  styleUrls: ['./administrar-usuarios.css']
})
export class AdministrarUsuariosComponent {
  constructor(private router: Router) {}

  usuariosActivos = [
    {
      username: 'juan3238',
      nombre: 'Juan Ramiro Morales Sarmiento',
      creacion: '12/04/2025',
      paquete: 'Viaje a Suiza, Paquete nº3'
    },
    {
      username: 'mari5797',
      nombre: 'María Alejandra Paredes Huerta',
      creacion: '17/07/2024',
      paquete: 'Viaje a Brasil, Paquete nº1'
    },
    {
      username: 'pao4579',
      nombre: 'Paola Alexandra Piñeda Lima',
      creacion: '12/08/2022',
      paquete: 'Viaje a Portugal, Paquete nº1'
    }
  ];

  usuariosNuevos = [
    {
      username: 'emili4575',
      nombre: 'Emilia Laura Flores Cervantes',
      creacion: '12/04/2026',
      nacimiento: '14/02/2001'
    },
    {
      username: 'pablo8797',
      nombre: 'Pedro Pablo Ramírez Quintana',
      creacion: '12/04/2026',
      nacimiento: '05/07/1998'
    },
    {
      username: 'ramiro27575',
      nombre: 'Ramiro Oliver Espinoza Lomas',
      creacion: '12/04/2026',
      nacimiento: '14/02/2002'
    }
  ];

  volverDashboard() {
    this.router.navigate(['/dashboard']);
    console.log("Volver al dashboard");}
  gestionarActividades() {}
  gestionarInfoMedica() {}
  gestionarAlojamientos() {}
}
