import { Component, Output, EventEmitter } from '@angular/core';
import { Bergen } from '../bergen/bergen';

@Component({
  selector: 'especificacioneslubeck',
  standalone: true,
  templateUrl: './especificacioneslubeck.html',
  styleUrls: ['./especificacioneslubeck.css']
})
export class Especificacioneslubeck {
  @Output() cerrar = new EventEmitter<void>();
}
