import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Especificacionestours } from '../especificacionestours/especificacionestours';

@Component({
  selector: 'app-tours',
  standalone: true,
  imports: [Especificacionestours],
  templateUrl: './tours.html',
  styleUrls: ['./tours.css']
})
export class Tours {

  mostrarEspecificaciones = false;
  mostrarPago = false;

  constructor(private router: Router) {}

  volver() {
    this.router.navigate(['/francia']);
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
    this.router.navigate(['/valoraciones', 'Tours']);
  }
}