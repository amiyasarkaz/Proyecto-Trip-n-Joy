import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-gestionaractividades',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './gestionaractividades.html',
  styleUrls: ['./gestionaractividades.css']
})
export class GestionarActividades implements OnInit {
  
  actividades: any[] = [];
  actividadEditando: any = null;
  mensaje = '';
  error = '';
  cargando = false;

  constructor(
    private router: Router, 
    private http: HttpClient,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    console.log('🚀 Componente iniciado');
    this.cargarActividades();
  }

  cargarActividades() {
    console.log('📡 Cargando actividades...');
    this.http.get('http://localhost/api/actividades').subscribe({
      next: (data: any) => {
        // ✅ Filtrar elementos null o undefined
        this.actividades = data.filter((a: any) => a !== null && a !== undefined);
        console.log('📦 Datos recibidos:', this.actividades);
        console.log('📦 Longitud después de filtrar:', this.actividades.length);
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('❌ Error:', err);
        this.error = 'Error al cargar actividades';
      }
    });
  }

  guardarActividadEditada() {
    // ✅ Validar que hay una actividad para editar
    if (!this.actividadEditando) {
      this.error = 'No hay actividad para editar';
      return;
    }
    
    this.cargando = true;
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    this.http.put(`http://localhost/api/actividades/${this.actividadEditando.id}`, this.actividadEditando, { headers })
      .subscribe({
        next: () => {
          this.cargando = false;
          this.mensaje = '✅ Actividad actualizada correctamente';
          this.cargarActividades();
          this.actividadEditando = null;
          setTimeout(() => this.mensaje = '', 3000);
        },
        error: (err) => {
          this.cargando = false;
          this.error = '❌ Error al guardar la actividad';
          console.error(err);
        }
      });
  }

  abrirEditor(actividad: any) {
    this.actividadEditando = { ...actividad };
  }

  cerrarEditor() {
    this.actividadEditando = null;
    this.mensaje = '';
    this.error = '';
  }

  volverDashboard() {
    this.router.navigate(['/dashboard']);
    console.log("Volver al dashboard");
  }
   
  administrarUsuarios() {
    this.router.navigate(['/administrar-usuarios']);
    console.log("Ir a administrar usuarios");
  }
  
  gestionarInfoMedica() {}
  gestionarAlojamientos() {}
}