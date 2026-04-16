import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Especificacionesstavanger } from '../especificacionesstavanger/especificacionesstavanger';
import { Valoraciones1 } from '../valoraciones/valoraciones1';


@Component({
  selector: 'stavanger',
  imports: [Especificacionesstavanger, Valoraciones1],
  standalone: true,
  templateUrl: './stavanger.html',
  styleUrls: ['./stavanger.css']
})
export class Stavanger {

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
