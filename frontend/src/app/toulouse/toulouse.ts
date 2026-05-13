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

  abrirPopup() {
    this.mostrarPago = true;
  }

  cerrarPopup() {
    this.mostrarPago = false;
    this.mostrarEspecificaciones = false;
  }

  volveratras() {}

  irAValoraciones() {
    this.router.navigate(['/valoraciones', 'Toulouse']);
  }
}