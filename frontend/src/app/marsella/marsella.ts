import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Especificacionesmarsella } from '../especificacionesmarsella/especificacionesmarsella';

@Component({
  selector: 'app-marsella',
  standalone: true,
  imports: [Especificacionesmarsella],
  templateUrl: './marsella.html',
  styleUrls: ['./marsella.css']
})
export class Marsella {

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
    this.router.navigate(['/valoraciones', 'Marsella']);
  }
}