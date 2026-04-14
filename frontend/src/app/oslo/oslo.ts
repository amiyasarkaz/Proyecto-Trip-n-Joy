import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Especificaciones1 } from '../especificaciones1/especificaciones1';
import { Valoraciones1 } from '../valoraciones/valoraciones1';


@Component({
  selector: 'oslo',
  imports: [Especificaciones1, Valoraciones1],
  standalone: true,
  templateUrl: './oslo.html',
  styleUrls: ['./oslo.css']
})
export class Oslo {

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
