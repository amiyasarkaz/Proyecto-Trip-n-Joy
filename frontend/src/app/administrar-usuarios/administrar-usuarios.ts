import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-administrar-usuarios',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './administrar-usuarios.html',
  styleUrls: ['./administrar-usuarios.css']
})
export class AdministrarUsuarios implements OnInit {

  usuariosActivos: any[] = [];
  usuariosNuevos: any[] = [];
  cargando = false;
  mensaje = '';
  error = '';

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit() {
    this.cargarUsuarios();
  }

  cargarUsuarios() {
    this.cargando = true;
    const token = localStorage.getItem('token');
    
    if (!token) {
      this.error = 'No hay sesión iniciada';
      this.cargando = false;
      return;
    }

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    this.http.get('http://localhost/api/usuarios', { headers }).subscribe({
      next: (data: any) => {
        console.log('📦 Usuarios recibidos:', data);
        this.usuariosActivos = data;
        this.usuariosNuevos = [];
        this.cargando = false;
      },
      error: (err) => {
        console.error('❌ Error:', err);
        this.error = 'Error al cargar usuarios';
        this.cargando = false;
      }
    });
  }

  darDeBaja(usuario: any) {
    if (confirm(`¿Estás seguro de eliminar a ${usuario.name} ${usuario.apellido}? Esta acción no se puede deshacer.`)) {
      const token = localStorage.getItem('token');
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

      this.http.delete(`http://localhost/api/usuario/${usuario.id}`, { headers }).subscribe({
        next: () => {
          this.mensaje = `✅ Usuario ${usuario.name} eliminado correctamente`;
          this.cargarUsuarios();
          setTimeout(() => this.mensaje = '', 3000);
        },
        error: (err) => {
          console.error(err);
          this.error = '❌ Error al eliminar el usuario';
        }
      });
    }
  }

  notificar(usuario: any) {
    alert(`Notificación enviada a ${usuario.name} ${usuario.apellido}`);
  }

  volverDashboard() {
    this.router.navigate(['/dashboard']);
  }
    
  gestionarActividades() {
    this.router.navigate(['/gestionaractividades']);
  }
  
  gestionarInfoMedica() {}

  // ✅ Método agregado
  gestionarAlojamientos() {
    console.log("Gestionar alojamientos");
  }
}