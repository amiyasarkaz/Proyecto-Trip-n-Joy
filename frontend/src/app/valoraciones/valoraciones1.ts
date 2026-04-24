import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'valoraciones1',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './valoraciones1.html',
  styleUrls: ['./valoraciones1.css']
})
export class Valoraciones1 implements OnInit {
  
  @Input() destino: string = '';

  valoraciones: any[] = [];
  valoracionesMostradas: any[] = [];
  
  limiteMostrar = 5;
  todasVisibles = false;
  
  nuevoComentario = {
    destino: '',
    puntuacion: 5,
    comentario: ''
  };

  mensaje = '';
  error = '';
  cargando = false;
  usuarioLogueado = false;

  constructor(private http: HttpClient, private router: Router) {}

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
        this.actualizarListaMostrada();
      },
      error: (err) => {
        console.error('Error:', err);
        this.error = 'Error al cargar valoraciones';
      }
    });
  }

  actualizarListaMostrada() {
    if (this.todasVisibles) {
      this.valoracionesMostradas = [...this.valoraciones];
    } else {
      this.valoracionesMostradas = this.valoraciones.slice(0, this.limiteMostrar);
    }
  }

  mostrarTodas() {
    this.todasVisibles = true;
    this.actualizarListaMostrada();
  }

  mostrarRecientes() {
    this.todasVisibles = false;
    this.actualizarListaMostrada();
  }

  enviarComentario() {
    this.nuevoComentario.destino = this.destino;

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
          this.mensaje = '✅ ' + (respuesta.message || 'Comentario guardado');
          this.nuevoComentario.comentario = '';
          this.cargarValoraciones();
          setTimeout(() => {
            this.mensaje = '';
          }, 3000);
        },
        error: (error) => {
          this.cargando = false;
          if (error.status === 401) {
            this.error = 'Sesión expirada. Inicia sesión nuevamente.';
          } else {
            this.error = 'Error al enviar el comentario';
          }
        }
      });
  }

  getStars(puntuacion: number): string {
    return '⭐'.repeat(puntuacion) + '☆'.repeat(5 - puntuacion);
  }

  volver() {
    this.router.navigate(['/' + this.destino.toLowerCase()]);
  }
}