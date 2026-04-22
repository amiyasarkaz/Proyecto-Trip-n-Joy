import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'valoraciones1',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './valoraciones1.html',
  styleUrls: ['./valoraciones1.css']
})
export class Valoraciones1 implements OnInit {
  
  @Input() destino: string = '';
  @Output() cerrar = new EventEmitter<void>();

  valoraciones: any[] = [];
  
  nuevoComentario = {
    destino: '',
    puntuacion: 5,
    comentario: ''
  };

  mensaje = '';
  error = '';
  cargando = false;
  usuarioLogueado = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.usuarioLogueado = !!localStorage.getItem('token');
    this.nuevoComentario.destino = this.destino;
    this.cargarValoraciones();
  }

  cargarValoraciones() {
    const url = `http://localhost/api/valoraciones/${this.destino}`;
      
    this.http.get(url).subscribe({
      next: (data: any) => {
        this.valoraciones = data;
        console.log('✅ Valoraciones cargadas:', data.length);
      },
      error: (err) => {
        console.error('Error al cargar:', err);
      }
    });
  }

  enviarComentario() {
    // Asegurar que destino tiene el valor correcto
    this.nuevoComentario.destino = this.destino;

    console.log('📤 Enviando comentario:', this.nuevoComentario);

    if (!this.usuarioLogueado) {
      this.error = 'Debes iniciar sesión para comentar';
      return;
    }

    if (!this.nuevoComentario.comentario.trim()) {
      this.error = 'Escribe un comentario';
      return;
    }

    this.cargando = true;
    this.mensaje = '';
    this.error = '';

    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    this.http.post('http://localhost/api/valoraciones', this.nuevoComentario, { headers })
      .subscribe({
        next: (respuesta: any) => {
          this.cargando = false;
          this.mensaje = respuesta.message || '✅ Comentario guardado';
          this.nuevoComentario.comentario = '';
          this.nuevoComentario.puntuacion = 5;
          this.cargarValoraciones();
          
          setTimeout(() => {
            this.mensaje = '';
          }, 3000);
        },
        error: (error) => {
          this.cargando = false;
          console.error('❌ Error completo:', error);
          
          // ✅ Ver el error detallado del backend
          if (error.error) {
            console.error('❌ Respuesta del backend:', error.error);
            if (error.error.errors) {
              console.error('❌ Errores detallados:', error.error.errors);
            }
          }
          
          if (error.status === 401) {
            this.error = 'Sesión expirada. Inicia sesión nuevamente.';
          } else if (error.status === 422) {
            // Mostrar el error específico del backend
            if (error.error?.errors) {
              const errores = Object.values(error.error.errors).flat().join(', ');
              this.error = '❌ ' + errores;
            } else if (error.error?.message) {
              this.error = '❌ ' + error.error.message;
            } else {
              this.error = '❌ Error en el formulario. Revisa los datos.';
            }
          } else {
            this.error = '❌ Error al enviar el comentario';
          }
        }
      });
  }

  getStars(puntuacion: number): string {
    return '⭐'.repeat(puntuacion) + '☆'.repeat(5 - puntuacion);
  }

  cerrarPopup() {
    this.cerrar.emit();
  }
}