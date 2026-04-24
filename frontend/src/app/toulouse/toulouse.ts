import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Especificacionestoulouse } from '../especificacionestoulouse/especificacionestoulouse';

@Component({
  selector: 'app-toulouse',
  standalone: true,
  imports: [Especificacionestoulouse],
  templateUrl: './toulouse.html',
  styleUrls: ['./toulouse.css']
})
export class Toulouse {

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
    this.router.navigate(['/valoraciones', 'Toulouse']);
  }
}