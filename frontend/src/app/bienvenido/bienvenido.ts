import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bienvenido',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bienvenido.html',
  styleUrls: ['./bienvenido.css']
})
export class Bienvenido {

  constructor(private router: Router) {}

  cerrarBienvenido() {
    const checkbox = document.getElementById('modal-bienvenido-toggle') as HTMLInputElement;
    if (checkbox) checkbox.checked = false;

    const overlay = document.querySelector('.modal-overlay') as HTMLElement;
    if (overlay) overlay.style.display = 'none';

    console.log('Popup de bienvenido cerrado');
  }

  irAPaginaPrincipal() {
    this.cerrarBienvenido();
    this.router.navigate(['/home']);
  }
}
