import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gestionaractividades',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gestionaractividades.html',
  styleUrls: ['./gestionaractividades.css']
})
export class GestionarActividades {

  actividades = [
    {
      id: 1,
      titulo: 'Montañismo',
      descripcion: 'Recorrido por los Alpes Bávaros',
      inicio: '15/04/2026',
      imagen: '/actividad1.png'
    },
    {
      id: 2,
      titulo: 'Ciclismo',
      descripcion: 'Ciclismo por las calles de París',
      inicio: '21/04/2026',
      imagen: '/actividad2.png'
    },
    {
      id: 3,
      titulo: 'Auroras Boreales',
      descripcion: 'Avistamiento de auroras boreales en Islandia',
      inicio: '25/04/2026',
      imagen: '/actividad3.png'
    },
    {
      id: 4,
      titulo: 'Maravillas del Mundo',
      descripcion: 'Explorar la ciudadela inca de Machu Picchu',
      inicio: '02/05/2026',
      imagen: '/actividad4.png'
    },
    {
      id: 5,
      titulo: 'Ballenas en Noruega',
      descripcion: 'Safaris de ballenas en Noruega',
      inicio: '05/12/2026',
      imagen: '/actividad5.png'
    },
    {
      id: 6,
      titulo: 'Visita al Louvre',
      descripcion: 'Visita guiada al museo del Louvre',
      inicio: '08/06/2026',
      imagen: '/actividad6.png'
    }
  ];

  volverInicio() {}
  administrarUsuarios() {}
  gestionarInfoMedica() {}
  gestionarAlojamientos() {}

}
