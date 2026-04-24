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

  abrirPago() {
    this.mostrarPago = true;
  }

  cerrarPopup() {
    this.mostrarEspecificaciones = false;
    this.mostrarPago = false;
  }

  irAValoraciones() {
    this.router.navigate(['/valoraciones', 'Tours']);
  }
}