import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
  
  userData = {
    email: '',
    password: ''
  };

  mensaje = '';
  error = '';

  constructor(private http: HttpClient, private router: Router) {}

  iniciarSesion() {
    this.mensaje = '';
    this.error = '';

    this.http.post('http://localhost/api/login', this.userData)
      .subscribe({
        next: (respuesta: any) => {
          this.mensaje = '✅ Inicio de sesión exitoso';
          localStorage.setItem('token', respuesta.token);
          
          setTimeout(() => {
            // Cerrar popup de login
            this.cerrarLogin();
            
            // ✅ Abrir popup de bienvenido en la misma página (sin redirigir)
            this.abrirBienvenido();
            
            // ❌ ELIMINAR esta línea para que NO redirija
            // this.router.navigate(['/bienvenido']);
          }, 2000);
        },
        error: (error) => {
          this.error = '❌ Credenciales incorrectas';
        }
      });
  }

  cerrarLogin() {
    const checkboxLogin = document.getElementById('modal-login-toggle') as HTMLInputElement;
    if (checkboxLogin) {
      checkboxLogin.checked = false;
    }
  }

  abrirBienvenido() {
    const checkboxBienvenido = document.getElementById('modal-bienvenido-toggle') as HTMLInputElement;
    if (checkboxBienvenido) {
      checkboxBienvenido.checked = true;
      console.log('✅ Popup de bienvenido abierto en la misma página');
    } else {
      const overlay = document.querySelector('.modal-overlay') as HTMLElement;
      if (overlay) {
        overlay.style.display = 'flex';
      }
    }
  }

  abrirRegistro() {
    const checkboxLogin = document.getElementById('modal-login-toggle') as HTMLInputElement;
    if (checkboxLogin) {
      checkboxLogin.checked = false;
    }
    
    const checkboxRegistro = document.getElementById('modal-registro-toggle') as HTMLInputElement;
    if (checkboxRegistro) {
      checkboxRegistro.checked = true;
    }
  }
}