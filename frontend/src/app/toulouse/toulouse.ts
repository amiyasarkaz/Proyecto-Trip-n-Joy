import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Valoraciones1 } from '../valoraciones/valoraciones1';
import { Especificacionestoulouse } from '../especificacionestoulouse/especificacionestoulouse';


@Component({
  selector: 'toulouse',
  imports: [Especificacionestoulouse, Valoraciones1],
  standalone: true,
  templateUrl: './toulouse.html',
  styleUrls: ['./toulouse.css']
})
export class Toulouse {

  constructor(private router: Router) {}

  volver() {
    this.router.navigate(['/francia']);
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
