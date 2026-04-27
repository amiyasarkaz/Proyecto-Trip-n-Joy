import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'valoraciones1',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './valoraciones1.html',
  styleUrls: ['./valoraciones1.css']
})
export class Valoraciones1 implements OnInit {
  
  destino: string = '';

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

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit() {
    // Obtener el destino de la URL
    this.destino = this.route.snapshot.paramMap.get('destino') || '';
    console.log('🎯 Destino recibido:', this.destino);
    
    this.usuarioLogueado = !!localStorage.getItem('token');
    this.nuevoComentario.destino = this.destino;
    this.cargarValoraciones();
  }

  cargarValoraciones() {
    const url = `http://localhost/api/valoraciones/${this.destino}`;
    console.log('📡 Cargando valoraciones desde:', url);
    
    this.http.get(url).subscribe({
      next: (data: any) => {
        this.valoraciones = data;
        this.actualizarListaMostrada();
        console.log('✅ Valoraciones cargadas:', data.length);
      },
      error: (err) => {
        console.error('❌ Error al cargar:', err);
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
    console.log('📤 Datos a enviar:', this.nuevoComentario);

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
          console.log('✅ Respuesta del backend:', respuesta);
          this.cargando = false;
          
          // ✅ Alerta de confirmación - al aceptar recarga la página
          alert('✅ ¡Valoración enviada correctamente!');
          
          // ✅ Recargar la página completa para ver el nuevo comentario
          window.location.reload();
          
          // Limpiar formulario (se ejecuta antes de recargar)
          this.nuevoComentario.comentario = '';
        },
        error: (error) => {
          this.cargando = false;
          console.error('❌ Error respuesta:', error);
          
          // ✅ Alerta de error
          if (error.error?.errors) {
            const errores = Object.values(error.error.errors).flat().join(', ');
            alert('❌ Error al enviar la valoración:\n' + errores);
            this.error = '❌ ' + errores;
          } else if (error.error?.message) {
            alert('❌ Error al enviar la valoración:\n' + error.error.message);
            this.error = '❌ ' + error.error.message;
          } else if (error.status === 401) {
            alert('❌ Sesión expirada. Inicia sesión nuevamente.');
            this.error = 'Sesión expirada. Inicia sesión nuevamente.';
          } else if (error.status === 422) {
            alert('❌ Error en el formulario. Revisa los datos e inténtalo de nuevo.');
            this.error = 'Error en el formulario';
          } else {
            alert('❌ Error al enviar el comentario. Inténtalo de nuevo más tarde.');
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