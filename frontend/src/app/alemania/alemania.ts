import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alemania',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './alemania.html',
  styleUrls: ['./alemania.css']
})
export class Alemania implements OnInit {

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
        const alemania = data.find((item: any) => item.pais === 'Alemania');
        if (alemania) {
          this.informacionMedica = alemania.descripcion;
        } else {
          this.informacionMedica = 'No hay información médica disponible para Alemania.';
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

  goBerlin() {
    this.router.navigate(['/berlin']);
  }

  goBremen() {
    this.router.navigate(['/bremen']);
  }

  goLubeck() {
    this.router.navigate(['/lubeck']);
  }
}