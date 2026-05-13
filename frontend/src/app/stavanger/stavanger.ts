import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Especificacionesstavanger } from '../especificacionesstavanger/especificacionesstavanger';

@Component({
  selector: 'app-stavanger',
  standalone: true,
  imports: [Especificacionesstavanger],
  templateUrl: './stavanger.html',
  styleUrls: ['./stavanger.css']
})
export class Stavanger {

  mostrarEspecificaciones = false;
  mostrarPago = false;

  constructor(private router: Router) {}

  volver() {
    this.router.navigate(['/noruega']);
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
    this.router.navigate(['/valoraciones', 'Stavanger']);
  }
}