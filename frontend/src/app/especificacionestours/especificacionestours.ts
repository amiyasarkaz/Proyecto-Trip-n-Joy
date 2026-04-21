import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'especificacionestours',
  standalone: true,
  templateUrl: './especificacionestours.html',
  styleUrls: ['./especificacionestours.css']
})
export class Especificacionestours {
  @Output() cerrar = new EventEmitter<void>();
}
