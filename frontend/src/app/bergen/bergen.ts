import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Especificacionesbergen } from '../especificacionesbergen/especificacionesbergen';

@Component({
  selector: 'app-bergen',
  standalone: true,
  imports: [Especificacionesbergen],
  templateUrl: './bergen.html',
  styleUrls: ['./bergen.css']
})
export class Bergen {

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
    this.router.navigate(['/valoraciones', 'Bergen']);
  }
}


