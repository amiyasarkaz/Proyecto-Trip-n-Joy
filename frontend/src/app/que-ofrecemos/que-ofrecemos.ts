import { Component } from '@angular/core';

@Component({
  selector: 'app-que-ofrecemos',
  standalone: true,
  templateUrl: './que-ofrecemos.html',
  styleUrls: ['./que-ofrecemos.css']
})

export class QueOfrecemosComponent {

  abrirLogin() {
    // Buscar el checkbox del modal de login y marcarlo
    const checkbox = document.getElementById('modal-login-toggle') as HTMLInputElement;
    if (checkbox) {
      checkbox.checked = true;
    }
  }

  abrirRegistro() {
    // Buscar el checkbox del modal de registro y marcarlo
    const checkbox = document.getElementById('modal-registro-toggle') as HTMLInputElement;
    if (checkbox) {
      checkbox.checked = true;
    }
  }
}

