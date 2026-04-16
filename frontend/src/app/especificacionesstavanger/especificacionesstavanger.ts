import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'especificacionesstavanger',
  standalone: true,
  templateUrl: './especificacionesstavanger.html',
  styleUrls: ['./especificacionesstavanger.css']
})
export class Especificacionesstavanger {
  @Output() cerrar = new EventEmitter<void>();
}
