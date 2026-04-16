import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Valoraciones1 } from '../valoraciones/valoraciones1';
import { Especificacionesbremen } from '../especificacionesbremen/especificacionesbremen';


@Component({
  selector: 'bremen',
  imports: [Especificacionesbremen, Valoraciones1],
  standalone: true,
  templateUrl: './bremen.html',
  styleUrls: ['./bremen.css']
})
export class Bremen {

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
