import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'especificaciones1',
  standalone: true,
  templateUrl: './especificaciones1.html',
  styleUrls: ['./especificaciones1.css']
})
export class Especificaciones1 {
  @Output() cerrar = new EventEmitter<void>();
}
