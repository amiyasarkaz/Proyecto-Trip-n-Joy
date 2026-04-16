import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bienvenido',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bienvenido.html',
  styleUrls: ['./bienvenido.css']
})
export class Bienvenido {

  cerrarBienvenido() {
    // Cerrar el popup usando el checkbox
    const checkbox = document.getElementById('modal-bienvenido-toggle') as HTMLInputElement;
    if (checkbox) {
      checkbox.checked = false;
    }
    
    // Forzar cierre del overlay por si acaso
    const overlay = document.querySelector('.modal-overlay') as HTMLElement;
    if (overlay) {
      overlay.style.display = 'none';
    }
    
    console.log('Popup de bienvenido cerrado');
  }
}