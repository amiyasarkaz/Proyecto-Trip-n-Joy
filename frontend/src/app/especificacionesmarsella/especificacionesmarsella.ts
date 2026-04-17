import { Component, Output, EventEmitter } from '@angular/core';
import { Marsella } from '../marsella/marsella';

@Component({
  selector: 'especificacionesmarsella',
  standalone: true,
  templateUrl: './especificacionesmarsella.html',
  styleUrls: ['./especificacionesmarsella.css']
})
export class Especificacionesmarsella {
  @Output() cerrar = new EventEmitter<void>();
}
