import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registro.html',
  styleUrls: ['./registro.css']
})
export class RegistroComponent {
  
  userData = {
    name: '',
    apellido: '',
    email: '',
    nif: '',
    pais: '',
    telefono: '',
    password: '',
    password_confirmation: ''
  };

  mensaje = '';
  error = '';

  constructor(private http: HttpClient, private router: Router) {}

  registrarse() {
    this.mensaje = '';
    this.error = '';

    // Validar que las contraseñas coincidan
    if (this.userData.password !== this.userData.password_confirmation) {
      alert('❌ Las contraseñas no coinciden');
      return;
    }

    // Validar campos obligatorios
    if (!this.userData.name || !this.userData.email || !this.userData.password) {
      alert('❌ Nombre, email y contraseña son obligatorios');
      return;
    }

    this.http.post('http://localhost/api/register', this.userData)
      .subscribe({
        next: (respuesta: any) => {
          alert('✅ Usuario registrado exitosamente');
          this.mensaje = '✅ Registro exitoso';
          
          // Limpiar formulario
          this.userData = {
            name: '',
            apellido: '',
            email: '',
            nif: '',
            pais: '',
            telefono: '',
            password: '',
            password_confirmation: ''
          };
          
          setTimeout(() => {
            this.cerrarPopup();
            this.abrirLogin();
          }, 1500);
        },
        error: (error) => {
          console.error('Error:', error);
          if (error.status === 422) {
            alert('❌ Error de validación. Revisa los datos ingresados.');
          } else if (error.status === 0) {
            alert('❌ No se pudo conectar con el servidor');
          } else {
            alert('❌ Error al registrar usuario');
          }
          this.error = '❌ Error al registrar';
        }
      });
  }

  cerrarPopup() {
    const checkboxRegistro = document.getElementById('modal-registro-toggle') as HTMLInputElement;
    if (checkboxRegistro) {
      checkboxRegistro.checked = false;
    }
  }

  abrirLogin() {
    const checkboxLogin = document.getElementById('modal-login-toggle') as HTMLInputElement;
    if (checkboxLogin) {
      checkboxLogin.checked = true;
    }
  }
}