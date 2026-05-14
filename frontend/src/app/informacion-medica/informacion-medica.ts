import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-informacion-medica',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './informacion-medica.html',
  styleUrls: ['./informacion-medica.css']
})
export class InformacionMedica implements OnInit {
  
  paises: any[] = [];
  paisEditando: any = null;
  mensaje = '';
  error = '';
  cargando = false;

  constructor(private router: Router, private http: HttpClient, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.cargarInformacionMedica();
  }

  cargarInformacionMedica() {
    this.http.get('http://localhost/api/informacion-medica').subscribe({
      next: (data: any) => {
        this.paises = data;
        console.log('Datos cargados:', this.paises);
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Error:', err);
        this.error = 'Error al cargar la información médica';
        this.cdr.detectChanges();
      }
    });
  }

  abrirEditor(pais: any) {
    this.paisEditando = { ...pais };
  }

  cerrarEditor() {
    this.paisEditando = null;
    this.mensaje = '';
    this.error = '';
  }

  guardarInformacion() {
    this.cargando = true;
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    this.http.put(`http://localhost/api/informacion-medica/${this.paisEditando.id}`, 
      { descripcion: this.paisEditando.descripcion }, 
      { headers }
    ).subscribe({
      next: () => {
        this.cargando = false;
        this.mensaje = '✅ Información médica actualizada correctamente';
        this.cargarInformacionMedica();
        this.cerrarEditor();
        setTimeout(() => this.mensaje = '', 3000);
      },
      error: (err) => {
        this.cargando = false;
        console.error('Error:', err);
        this.error = '❌ Error al guardar la información';
      }
    });
  }

  volverDashboard() {
    this.router.navigate(['/dashboard']);
  }

  administrarUsuarios() {
    this.router.navigate(['/administrar-usuarios']);
  }

  gestionarActividades() {
    this.router.navigate(['/gestionaractividades']);
  }
}