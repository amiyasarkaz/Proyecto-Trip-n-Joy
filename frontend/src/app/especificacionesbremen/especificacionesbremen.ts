import { Component, Output, EventEmitter } from '@angular/core';
import { Bergen } from '../bergen/bergen';

@Component({
  selector: 'especificacionesbremen',
  standalone: true,
  templateUrl: './especificacionesbremen.html',
  styleUrls: ['./especificacionesbremen.css']
})
export class Especificacionesbremen {
  @Output() cerrar = new EventEmitter<void>();
}
