import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-noruega',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './noruega.html',
  styleUrls: ['./noruega.css']
})
export class Noruega implements OnInit {

  informacionMedica: string = 'Cargando información médica...';

  constructor(private router: Router, private http: HttpClient, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.cargarInformacionMedica();
  }

  cargarInformacionMedica() {
    this.http.get('http://localhost/api/informacion-medica').subscribe({
      next: (data: any) => {
        const noruega = data.find((item: any) => item.pais === 'Noruega');
        if (noruega) {
          this.informacionMedica = noruega.descripcion;
        } else {
          this.informacionMedica = 'No hay información médica disponible para Noruega.';
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

  goOslo() {
    this.router.navigate(['/oslo']);
  }

  goBergen() {
    this.router.navigate(['/bergen']);
  }

  goStavanger() {
    this.router.navigate(['/stavanger']);
  }
}