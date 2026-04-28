import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class Dashboard implements OnInit {

  actividades = 0;
  usuarios = 0;
  alojamientos = 0;
  
  cargando = true;
  user: any = null;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.verificarAdmin();
    this.cargarEstadisticas();
  }

  verificarAdmin() {
    const token = localStorage.getItem('token');
    if (!token) {
      this.router.navigate(['/login']);
      return;
    }

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    this.http.get('http://localhost/api/user', { headers }).subscribe({
      next: (respuesta: any) => {
        this.user = respuesta.user;
        this.cargando = false;
        
        // ✅ Si no es admin, redirigir a la página principal
        if (this.user.role !== 'admin') {
          alert('❌ Acceso denegado. No eres administrador.');
          this.router.navigate(['/']);
        }
      },
      error: (err) => {
        this.cargando = false;
        this.router.navigate(['/login']);
      }
    });
  }

  cargarEstadisticas() {
   
    this.actividades = 1560;
    this.usuarios = 12500;
    this.alojamientos = 1250;
  }

  gestionarActividades() {
    console.log("Ir a gestionar actividades");
    // this.router.navigate(['/admin/actividades']);
  }

  administrarUsuarios() {
    console.log("Ir a administrar usuarios");
    // this.router.navigate(['/admin/usuarios']);
  }

  gestionarInformacion() {
    console.log("Ir a gestionar información");
    // this.router.navigate(['/admin/informacion']);
  }

  gestionarAlojamientos() {
    console.log("Ir a gestionar alojamientos");
    // this.router.navigate(['/admin/alojamientos']);
  }
}