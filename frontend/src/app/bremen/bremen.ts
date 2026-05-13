import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Especificacionesbremen } from '../especificacionesbremen/especificacionesbremen';

@Component({
  selector: 'app-bremen',
  standalone: true,
  imports: [Especificacionesbremen],
  templateUrl: './bremen.html',
  styleUrls: ['./bremen.css']
})
export class Bremen {

  mostrarEspecificaciones = false;
  mostrarPago = false;

  constructor(private router: Router) {}

  volver() {
    this.router.navigate(['/alemania']);
  }

  abrirEspecificaciones() {
    this.mostrarEspecificaciones = true;
  }

  abrirPopup() {
    this.mostrarPago = true;
  }

  cerrarPopup() {
    this.mostrarPago = false;
    this.mostrarEspecificaciones = false;
  }

  volveratras() {}

  irAValoraciones() {
    this.router.navigate(['/valoraciones', 'Bremen']);
  }
}