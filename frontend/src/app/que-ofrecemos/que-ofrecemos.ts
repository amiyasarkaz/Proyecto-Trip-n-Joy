import { Component } from '@angular/core';

@Component({
  selector: 'app-que-ofrecemos',
  standalone: true,
  templateUrl: './que-ofrecemos.html',
  styleUrls: ['./que-ofrecemos.css']
})
export class QueOfrecemosComponent {

  abrirRegistro() {
    const checkbox = document.getElementById('modal-registro-toggle') as HTMLInputElement;
    if (checkbox) {
      checkbox.checked = true;
      console.log('✅ Popup de REGISTRO abierto');
    }
  }

  abrirLogin() {
    const checkbox = document.getElementById('modal-login-toggle') as HTMLInputElement;
    if (checkbox) {
      checkbox.checked = true;
      console.log('✅ Popup de LOGIN abierto');
    }
  }
}