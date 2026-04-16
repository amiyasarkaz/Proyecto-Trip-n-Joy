import { Component, Output, EventEmitter } from '@angular/core';
import { Bergen } from '../bergen/bergen';

@Component({
  selector: 'especificacionesberlin',
  standalone: true,
  templateUrl: './especificacionesberlin.html',
  styleUrls: ['./especificacionesberlin.css']
})
export class Especificacionesberlin {
  @Output() cerrar = new EventEmitter<void>();
}
