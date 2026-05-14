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

    // ✅ VALIDACIONES DEL LADO DEL CLIENTE
    if (!this.userData.email.trim()) {
      this.error = '❌ El email es obligatorio';
      return;
    }

    if (!this.isValidEmail(this.userData.email)) {
      this.error = '❌ El formato del email no es válido';
      return;
    }

    if (!this.userData.password.trim()) {
      this.error = '❌ La contraseña es obligatoria';
      return;
    }

    if (this.userData.password.length < 6) {
      this.error = '❌ La contraseña debe tener al menos 6 caracteres';
      return;
    }

    this.http.post('http://localhost/api/login', this.userData)
      .subscribe({
        next: (respuesta: any) => {
          this.mensaje = '✅ Inicio de sesión exitoso';
          localStorage.setItem('token', respuesta.token);
          
          setTimeout(() => {
            this.cerrarLogin();
            
            // ✅ Cambiado de '/admin' a '/dashboard'
            if (respuesta.user?.role === 'admin') {
              this.router.navigate(['/dashboard']);  // ← Cambiado a dashboard
            } else {
              this.abrirBienvenido();
            }
          }, 2000);
        },
        error: (error) => {
          console.error('Error de login:', error);
          if (error.status === 401) {
            this.error = '❌ Credenciales incorrectas. Verifica tu email y contraseña.';
          } else if (error.status === 422) {
            this.error = '❌ Datos inválidos. Revisa la información ingresada.';
          } else if (error.status === 0) {
            this.error = '❌ No se pudo conectar con el servidor. Inténtalo más tarde.';
          } else {
            this.error = '❌ Error al iniciar sesión. Inténtalo de nuevo.';
          }
        }
      });
  }

  // ✅ MÉTODO PARA VALIDAR EMAIL
  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
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