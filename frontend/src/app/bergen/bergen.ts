import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Especificacionesbergen } from '../especificacionesbergen/especificacionesbergen';
import { Valoraciones1 } from '../valoraciones/valoraciones1';


@Component({
  selector: 'bergen',
  imports: [Especificacionesbergen, Valoraciones1],
  standalone: true,
  templateUrl: './bergen.html',
  styleUrls: ['./bergen.css']
})
export class Bergen {

  constructor(private router: Router) {}

  volver() {
    this.router.navigate(['/noruega']);
  }
    mostrarEspecificaciones = false;
  mostrarPago = false;

abrirEspecificaciones() {
  this.mostrarEspecificaciones = true;
}

abrirPago() {
  this.mostrarPago = true;
}

cerrarPopup() {
  this.mostrarEspecificaciones = false;
  this.mostrarPago = false;
  this.mostrarValoraciones = false;
}

mostrarValoraciones = false;

abrirValoraciones() {
  this.mostrarValoraciones = true;
}


}
