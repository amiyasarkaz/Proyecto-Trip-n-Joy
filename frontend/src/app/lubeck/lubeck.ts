import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Valoraciones1 } from '../valoraciones/valoraciones1';
import { Especificacioneslubeck } from '../especificacioneslubeck/especificacioneslubeck';


@Component({
  selector: 'lubeck',
  imports: [Especificacioneslubeck, Valoraciones1],
  standalone: true,
  templateUrl: './lubeck.html',
  styleUrls: ['./lubeck.css']
})
export class Lubeck {

  constructor(private router: Router) {}

  volver() {
    this.router.navigate(['/alemania']);
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
