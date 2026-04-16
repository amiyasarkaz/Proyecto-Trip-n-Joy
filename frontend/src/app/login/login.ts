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
            this.cerrarLogin();
            this.router.navigate(['/inicio-usuario']);
          }, 2000);
        },
        error: (error) => {
          this.error = '❌ Credenciales incorrectas';
        }
      });
  }

  cerrarLogin() {
    // Desmarca el checkbox del login para cerrar el popup
    const checkboxLogin = document.getElementById('modal-login-toggle') as HTMLInputElement;
    if (checkboxLogin) {
      checkboxLogin.checked = false;
    }
  }

  abrirRegistro() {
    // Cierra el popup de login
    const checkboxLogin = document.getElementById('modal-login-toggle') as HTMLInputElement;
    if (checkboxLogin) {
      checkboxLogin.checked = false;
    }
    
    // Abre el popup de registro
    const checkboxRegistro = document.getElementById('modal-registro-toggle') as HTMLInputElement;
    if (checkboxRegistro) {
      checkboxRegistro.checked = true;
    }
  }
}