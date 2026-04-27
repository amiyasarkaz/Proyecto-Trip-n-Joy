import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './pagina-principal.html',
  styleUrls: ['./pagina-principal.css']
})
export class PaginaPrincipal implements OnInit {
  
  userName = '';
  userPhoto = '';

  // Datos del formulario de perfil
  userData = {
    name: '',
    apellido: '',
    email: '',
    telefono: '',
    pais: ''
  };

  mensaje = '';
  error = '';
  cargando = false;

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit() {
    this.cargarPerfil();
  }

  cargarPerfil() {
    const token = localStorage.getItem('token');
    if (!token) {
      this.userName = 'MI PERFIL';
      return;
    }

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    this.http.get('http://localhost/api/user', { headers }).subscribe({
      next: (respuesta: any) => {
        this.userName = respuesta.user.name || 'MI PERFIL';
        this.userData = {
          name: respuesta.user.name || '',
          apellido: respuesta.user.apellido || '',
          email: respuesta.user.email || '',
          telefono: respuesta.user.telefono || '',
          pais: respuesta.user.pais || ''
        };
      },
      error: (err) => {
        console.error('Error al cargar perfil:', err);
        this.userName = 'MI PERFIL';
      }
    });
  }

  guardarPerfil() {
    this.cargando = true;
    this.mensaje = '';
    this.error = '';

    const token = localStorage.getItem('token');
    if (!token) {
      this.error = 'Debes iniciar sesión para editar el perfil';
      this.cargando = false;
      return;
    }

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    this.http.put('http://localhost/api/user/update', this.userData, { headers }).subscribe({
      next: (respuesta: any) => {
        this.cargando = false;
        this.mensaje = respuesta.message || 'Perfil actualizado correctamente';
        this.userName = this.userData.name || 'MI PERFIL';
        
        // ✅ ALERTA DE CONFIRMACIÓN
        alert('✅ ¡Datos guardados correctamente!');
        
        setTimeout(() => {
          this.mensaje = '';
          this.cerrarPopupPerfil();
        }, 2000);
      },
      error: (error) => {
        this.cargando = false;
        
        // ✅ ALERTA DE ERROR
        if (error.status === 422) {
          const errores = Object.values(error.error.errors).flat().join(', ');
          alert('❌ Error: ' + errores);
          this.error = '❌ ' + errores;
        } else if (error.status === 401) {
          alert('❌ Sesión expirada. Inicia sesión nuevamente.');
          this.error = 'Sesión expirada. Inicia sesión nuevamente.';
        } else {
          alert('❌ Error al actualizar el perfil');
          this.error = 'Error al actualizar el perfil';
        }
      }
    });
  }

  abrirPerfil() {
    const token = localStorage.getItem('token');
    if (!token) {
      this.router.navigate(['/login']);
      return;
    }
    const checkbox = document.getElementById('modal-perfil-toggle') as HTMLInputElement;
    if (checkbox) checkbox.checked = true;
  }

  cerrarPopupPerfil() {
    const checkbox = document.getElementById('modal-perfil-toggle') as HTMLInputElement;
    if (checkbox) checkbox.checked = false;
  }

  goNoruega() {
    this.router.navigate(['/noruega']);
  }

  goAlemania() {
    this.router.navigate(['/alemania']);
  }

  goFrancia() {
    this.router.navigate(['/francia']);
  }

  irAValoracionesGenerales() {
    this.router.navigate(['/valoraciones-generales']);
  }

  irARedesSociales() {
    this.router.navigate(['/redes-sociales']);
  }
}