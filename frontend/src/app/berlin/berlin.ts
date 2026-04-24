import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Especificacionesberlin } from '../especificacionesberlin/especificacionesberlin';

@Component({
  selector: 'app-berlin',
  standalone: true,
  imports: [Especificacionesberlin],
  templateUrl: './berlin.html',
  styleUrls: ['./berlin.css']
})
export class Berlin {

  mostrarEspecificaciones = false;
  mostrarPago = false;

  constructor(private router: Router) {}

  volver() {
    this.router.navigate(['/alemania']);
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
    this.router.navigate(['/valoraciones', 'Berlin']);
  }
}