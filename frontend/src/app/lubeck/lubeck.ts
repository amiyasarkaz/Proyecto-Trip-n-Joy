import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Especificacioneslubeck } from '../especificacioneslubeck/especificacioneslubeck';

@Component({
  selector: 'app-lubeck',
  standalone: true,
  imports: [Especificacioneslubeck],
  templateUrl: './lubeck.html',
  styleUrls: ['./lubeck.css']
})
export class Lubeck {

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
    this.router.navigate(['/valoraciones', 'Lubeck']);
  }
}