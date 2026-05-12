import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-informacion-medica',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './informacion-medica.html',
  styleUrls: ['./informacion-medica.css']
})
export class InformacionMedica {
   constructor(private router: Router) {}
  paises = [
    { nombre: 'Alemania', descripcion: 'Es obligatorio contar con un seguro de salud válido en el país que cubra enfermedades y accidentes durante toda la estancia. Infórmate con al menos 12 semanas de anticipación.' },
    { nombre: 'Francia', descripcion: 'No exige vacunas obligatorias, aunque se recomienda tener el calendario al día. Si visitas territorios de ultramar, consulta sobre prevención de malaria. Lleva tu Tarjeta Sanitaria Europea si eres de la UE y un seguro de viaje complementario.' },
    { nombre: 'Noruega', descripcion: 'Sin vacunas obligatorias. Recomiendan precaución por garrapatas (encefalitis) en zonas costeras del sur. Obligatorio seguro médico Schengen (mínimo 30.000€). Llevar Tarjeta Sanitaria Europea si eres de la UE. Contrata seguro con cobertura de rescate en montaña.' },
  ];

   volverDashboard() {
    this.router.navigate(['/dashboard']);
    console.log("Volver al dashboard");}
   
  administrarUsuarios() {
    this.router.navigate(['/administrar-usuarios']);
    console.log("Ir a administrar usuarios");}

    gestionarActividades() {
    this.router.navigate(['/gestionaractividades']);
    console.log("Ir a gestionar actividades");
  }
}

