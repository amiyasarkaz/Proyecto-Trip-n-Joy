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

    // ✅ VALIDACIONES DEL LADO DEL CLIENTE

    // Validar nombre
    if (!this.userData.name.trim()) {
      this.error = '❌ El nombre es obligatorio';
      return;
    }

    if (this.userData.name.trim().length < 2) {
      this.error = '❌ El nombre debe tener al menos 2 caracteres';
      return;
    }

    // Validar apellido
    if (!this.userData.apellido.trim()) {
      this.error = '❌ El apellido es obligatorio';
      return;
    }

    if (this.userData.apellido.trim().length < 2) {
      this.error = '❌ El apellido debe tener al menos 2 caracteres';
      return;
    }

    // Validar email
    if (!this.userData.email.trim()) {
      this.error = '❌ El email es obligatorio';
      return;
    }

    if (!this.isValidEmail(this.userData.email)) {
      this.error = '❌ El formato del email no es válido';
      return;
    }

    // Validar NIF (formato español básico)
    if (!this.userData.nif.trim()) {
      this.error = '❌ El NIF es obligatorio';
      return;
    }

    if (!this.isValidNIF(this.userData.nif)) {
      this.error = '❌ El formato del NIF no es válido (ej: 12345678A)';
      return;
    }

    // Validar país
    if (!this.userData.pais.trim()) {
      this.error = '❌ El país es obligatorio';
      return;
    }

    // Validar teléfono (opcional pero si se ingresa debe ser válido)
    if (this.userData.telefono.trim() && !this.isValidPhone(this.userData.telefono)) {
      this.error = '❌ El formato del teléfono no es válido';
      return;
    }

    // Validar contraseña
    if (!this.userData.password.trim()) {
      this.error = '❌ La contraseña es obligatoria';
      return;
    }

    if (this.userData.password.length < 8) {
      this.error = '❌ La contraseña debe tener al menos 8 caracteres';
      return;
    }

    if (!this.isStrongPassword(this.userData.password)) {
      this.error = '❌ La contraseña debe contener al menos una letra mayúscula, una minúscula y un número';
      return;
    }

    // Validar confirmación de contraseña
    if (!this.userData.password_confirmation.trim()) {
      this.error = '❌ Debes confirmar tu contraseña';
      return;
    }

    if (this.userData.password !== this.userData.password_confirmation) {
      this.error = '❌ Las contraseñas no coinciden';
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
          console.error('Error de registro:', error);
          if (error.status === 422) {
            if (error.error?.errors) {
              const errores = Object.values(error.error.errors).flat().join(', ');
              this.error = '❌ ' + errores;
            } else {
              this.error = '❌ Error de validación. Revisa los datos ingresados.';
            }
          } else if (error.status === 0) {
            this.error = '❌ No se pudo conectar con el servidor. Inténtalo más tarde.';
          } else if (error.status === 409) {
            this.error = '❌ El email o NIF ya están registrados.';
          } else {
            this.error = '❌ Error al registrar usuario. Inténtalo de nuevo.';
          }
        }
      });
  }

  // ✅ MÉTODO PARA VALIDAR EMAIL
  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // ✅ MÉTODO PARA VALIDAR NIF ESPAÑOL
  private isValidNIF(nif: string): boolean {
    const nifRegex = /^[0-9]{8}[A-Z]$/;
    return nifRegex.test(nif.toUpperCase());
  }

  // ✅ MÉTODO PARA VALIDAR TELÉFONO
  private isValidPhone(phone: string): boolean {
    const phoneRegex = /^[\+]?[0-9\s\-\(\)]{9,15}$/;
    return phoneRegex.test(phone);
  }

  // ✅ MÉTODO PARA VALIDAR CONTRASEÑA FUERTE
  private isStrongPassword(password: string): boolean {
    // Al menos una mayúscula, una minúscula y un número
    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/;
    return strongPasswordRegex.test(password);
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