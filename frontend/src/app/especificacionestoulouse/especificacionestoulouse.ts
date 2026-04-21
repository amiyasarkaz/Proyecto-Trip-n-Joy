import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'especificacionestoulouse',
  standalone: true,
  templateUrl: './especificacionestoulouse.html',
  styleUrls: ['./especificacionestoulouse.css']
})
export class Especificacionestoulouse {
  @Output() cerrar = new EventEmitter<void>();
}
