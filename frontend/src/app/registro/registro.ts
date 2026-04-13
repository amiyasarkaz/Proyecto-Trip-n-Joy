import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';  // Necesario para [(ngModel)]
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registro',
  standalone: true,  // Si es standalone component
  imports: [CommonModule, FormsModule],  // Importar FormsModule para ngModel
  templateUrl: './registro.html',
  styleUrls: ['./registro.css']
})
export class RegistroComponent {
  
  // Datos del formulario
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

  constructor(private http: HttpClient) {}

  // Método para registrar usuario
  registrarse() {
    // Limpiar mensajes previos
    this.mensaje = '';
    this.error = '';

    // Validar que las contraseñas coincidan
    if (this.userData.password !== this.userData.password_confirmation) {
      this.error = 'Las contraseñas no coinciden';
      return;
    }

    // Validar campos obligatorios
    if (!this.userData.name || !this.userData.email || !this.userData.password) {
      this.error = 'Nombre, email y contraseña son obligatorios';
      return;
    }

    // Enviar petición al backend
    this.http.post('http://localhost/api/register', this.userData)
      .subscribe({
        next: (respuesta: any) => {
          this.mensaje = respuesta.message || 'Registro exitoso';
          console.log('Usuario registrado:', respuesta);
          
          // Opcional: Guardar token y redirigir
          if (respuesta.token) {
            localStorage.setItem('token', respuesta.token);
          }
          
          // Limpiar formulario
          this.userData = {
            name: '', apellido: '', email: '', 
            nif: '', pais: '', telefono: '', 
            password: '', password_confirmation: ''
          };
          
          // Opcional: Cerrar modal después de 2 segundos
          setTimeout(() => {
            // Cerrar modal (lógica para cerrar)
          }, 2000);
        },
        error: (error) => {
          if (error.status === 422) {
            // Errores de validación
            this.error = this.obtenerErroresValidacion(error.error.errors);
          } else if (error.status === 0) {
            this.error = 'No se pudo conectar con el servidor';
          } else {
            this.error = error.error?.message || 'Error en el registro';
          }
          console.error('Error:', error);
        }
      });
  }

  // Método para formatear errores de validación
  private obtenerErroresValidacion(errors: any): string {
    let mensaje = '';
    for (let campo in errors) {
      mensaje += errors[campo].join(', ') + '\n';
    }
    return mensaje;
  }

  cerrarModal() {
    // Lógica para cerrar el modal de registro y abrir el de login
    // Esto depende de cómo manejen los modales
  }
}