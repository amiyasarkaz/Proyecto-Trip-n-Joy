import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class Dashboard {

  actividades = 1560;
  usuarios = 12500;
  alojamientos = 1250;

  gestionarActividades() {
    console.log("Ir a gestionar actividades");
  }

  administrarUsuarios() {
    console.log("Ir a administrar usuarios");
  }

  gestionarInformacion() {
    console.log("Ir a gestionar información");
  }

  gestionarAlojamientos() {
    console.log("Ir a gestionar alojamientos");
  }
}