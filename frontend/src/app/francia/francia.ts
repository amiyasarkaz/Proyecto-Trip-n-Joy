import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-francia',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './francia.html',
  styleUrls: ['./francia.css']
})
export class Francia implements OnInit {

  informacionMedica: string = 'Cargando información médica...';

  constructor(private router: Router, private http: HttpClient, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.cargarInformacionMedica();
  }

  cargarInformacionMedica() {
    // ✅ URL CORRECTA: puerto 80
    this.http.get('http://localhost/api/informacion-medica').subscribe({
      next: (data: any) => {
        // ✅ Buscar por 'nombre'
        const francia = data.find((item: any) => item.pais === 'Francia');
        if (francia) {
          this.informacionMedica = francia.descripcion;
        } else {
          this.informacionMedica = 'No hay información médica disponible para Francia.';
        }
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Error:', err);
        this.informacionMedica = 'Error al cargar la información médica.';
        this.cdr.detectChanges();
      }
    });
  }

  goMarsella() {
    this.router.navigate(['/marsella']);
  }

  goToulouse() {
    this.router.navigate(['/toulouse']);
  }

  goTours() {
    this.router.navigate(['/tours']);
  }
}