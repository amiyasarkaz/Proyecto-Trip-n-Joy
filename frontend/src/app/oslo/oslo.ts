import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Especificacionesoslo } from '../especificacionesoslo/especificacionesoslo';

@Component({
  selector: 'app-oslo',
  standalone: true,
  imports: [Especificacionesoslo],
  templateUrl: './oslo.html',
  styleUrls: ['./oslo.css']
})
export class Oslo {

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
    this.router.navigate(['/valoraciones', 'Oslo']);
  }
}