import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'especificacionesoslo',
  standalone: true,
  templateUrl: './especificacionesoslo.html',
  styleUrls: ['./especificacionesoslo.css']
})
export class Especificacionesoslo {
  @Output() cerrar = new EventEmitter<void>();
}
