import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editar-montana',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './editar-montana.html',
  styleUrls: ['./editar-montana.css']
})
export class EditarMontanaComponent {

  actividad = {
    titulo: 'Montañismo',
    descripcion: 'Recorrido por los Alpes Bávaros',
    inicio: '15/04/2026',
    lugar: 'Alemania',
    inscritos: 32,
    imagen: '/actividad1.png'
  };

}
