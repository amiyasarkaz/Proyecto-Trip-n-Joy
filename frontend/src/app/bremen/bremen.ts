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

  abrirPago() {
    this.mostrarPago = true;
  }

  cerrarPopup() {
    this.mostrarEspecificaciones = false;
    this.mostrarPago = false;
  }

  irAValoraciones() {
    this.router.navigate(['/valoraciones', 'Bremen']);
  }
}