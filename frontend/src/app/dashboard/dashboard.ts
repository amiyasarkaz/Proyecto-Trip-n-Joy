import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class Dashboard {

  actividades = 1560;
  usuarios = 12500;
  alojamientos = 1250;

  constructor(private router: Router) {}
  gestionarActividades() {
    this.router.navigate(['/gestionaractividades']);
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