import { Component, Output, EventEmitter } from '@angular/core';
import { Bergen } from '../bergen/bergen';

@Component({
  selector: 'especificacionesbergen',
  standalone: true,
  templateUrl: './especificacionesbergen.html',
  styleUrls: ['./especificacionesbergen.css']
})
export class Especificacionesbergen {
  @Output() cerrar = new EventEmitter<void>();
}
