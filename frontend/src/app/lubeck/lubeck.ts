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

  abrirPago() {
    this.mostrarPago = true;
  }

  cerrarPopup() {
    this.mostrarEspecificaciones = false;
    this.mostrarPago = false;
  }

  irAValoraciones() {
    this.router.navigate(['/valoraciones', 'Lubeck']);
  }
}