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

  abrirPago() {
    this.mostrarPago = true;
  }

  cerrarPopup() {
    this.mostrarEspecificaciones = false;
    this.mostrarPago = false;
  }

  irAValoraciones() {
    this.router.navigate(['/valoraciones', 'Stavanger']);
  }
}