import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'valoraciones1',
  standalone: true,
  templateUrl: './valoraciones1.html',
  styleUrls: ['./valoraciones1.css']
})
export class Valoraciones1 {
  @Output() cerrar = new EventEmitter<void>();
}
