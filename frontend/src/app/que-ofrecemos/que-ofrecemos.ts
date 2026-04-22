import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-que-ofrecemos',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './que-ofrecemos.html',
  styleUrls: ['./que-ofrecemos.css']
})

export class QueOfrecemos {

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

