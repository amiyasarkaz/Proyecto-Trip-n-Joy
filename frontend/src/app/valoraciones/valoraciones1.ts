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
    this.cargarValoraciones();
    this.usuarioLogueado = !!localStorage.getItem('token');
    this.nuevoComentario.destino = this.destino;
  }

  cargarValoraciones() {
    const url = this.destino 
      ? `http://localhost/api/valoraciones/${this.destino}`
      : 'http://localhost/api/valoraciones';
      
    this.http.get(url).subscribe({
      next: (data: any) => {
        this.valoraciones = data;
      },
      error: (err) => {
        console.error('Error:', err);
      }
    });
  }

  enviarComentario() {
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
          this.mensaje = respuesta.message;
          this.nuevoComentario.comentario = '';
          this.nuevoComentario.puntuacion = 5;
          this.cargarValoraciones();
          
          setTimeout(() => {
            this.mensaje = '';
          }, 3000);
        },
        error: (error) => {
          this.cargando = false;
          if (error.status === 401) {
            this.error = 'Sesión expirada. Inicia sesión nuevamente.';
          } else if (error.status === 422) {
            this.error = 'Error en el formulario';
          } else {
            this.error = 'Error al enviar el comentario';
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