import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Router } from '@angular/router';


@Component({
  selector: 'app-gestionaractividades',

  imports: [CommonModule, RouterModule],
  templateUrl: './gestionaractividades.html',
  styleUrls: ['./gestionaractividades.css']
})
export class GestionarActividades {
  constructor(private router: Router) {}


  actividades: any[] = [];
  actividadEditando: any = {
    id: 0,
    titulo: '',
    imagen: '',
    descripcion: '',
    inicio: '',
    precio: 0
  };
  actividadIndex: number = 0;

  private apiUrl = 'http://localhost/api/activities';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.cargarActividades();
  }

  // Cargar actividades desde el backend
  cargarActividades() {
    this.http.get(this.apiUrl).subscribe(
      (data: any) => {
        console.log('Actividades cargadas:', data);
        if (Array.isArray(data) && data.length > 0) {
          this.actividades = data.map((act: any) => ({
            id: act.id,
            titulo: act.name,
            descripcion: act.description || 'Sin descripción',
            inicio: act.start_date || this.formatearFecha(act.created_at),
            imagen: act.image || 'https://via.placeholder.com/300',
            precio: act.price || 0
          }));
        } else {
          this.cargarDatosLocales();
        }
      },
      error => {
        console.error('Error al cargar actividades:', error);
        this.cargarDatosLocales();
      }
    );
  }

  // Datos locales de respaldo
  cargarDatosLocales() {
    this.actividades = [
      {
        id: 1,
        titulo: 'Montañismo',
        descripcion: 'Recorrido por los Alpes Bávaros',
        inicio: '2026-04-15',
        imagen: 'https://via.placeholder.com/300/4CAF50/white?text=Montañismo',
        precio: 89.99
      },
      {
        id: 2,
        titulo: 'Ciclismo',
        descripcion: 'Ciclismo por las calles de París',
        inicio: '2026-04-21',
        imagen: 'https://via.placeholder.com/300/2196F3/white?text=Ciclismo',
        precio: 45.50
      },
      {
        id: 3,
        titulo: 'Auroras Boreales',
        descripcion: 'Avistamiento de auroras boreales en Islandia',
        inicio: '2026-04-25',
        imagen: 'https://via.placeholder.com/300/9C27B0/white?text=Auroras',
        precio: 125.00
      },
      {
        id: 4,
        titulo: 'Maravillas del Mundo',
        descripcion: 'Explorar la ciudadela inca de Machu Picchu',
        inicio: '2026-05-02',
        imagen: 'https://via.placeholder.com/300/FF9800/white?text=Machu+Picchu',
        precio: 199.99
      },
      {
        id: 5,
        titulo: 'Ballenas en Noruega',
        descripcion: 'Safaris de ballenas en Noruega',
        inicio: '2026-12-05',
        imagen: 'https://via.placeholder.com/300/00BCD4/white?text=Ballenas',
        precio: 149.99
      },
      {
        id: 6,
        titulo: 'Visita al Louvre',
        descripcion: 'Visita guiada al museo del Louvre',
        inicio: '2026-06-08',
        imagen: 'https://via.placeholder.com/300/795548/white?text=Louvre',
        precio: 65.00
      }
    ];
  }

  // Abrir popup para editar
  abrirEdicion(actividad: any, index: number) {
    this.actividadEditando = { ...actividad };
    this.actividadIndex = index;
  }

  // Guardar cambios en el backend
  guardarCambios() {
    const actividadActualizada = {
      name: this.actividadEditando.titulo,
      description: this.actividadEditando.descripcion,
      image: this.actividadEditando.imagen,
      start_date: this.actividadEditando.inicio,
      price: this.actividadEditando.precio
    };

    this.http.put(`${this.apiUrl}/${this.actividadEditando.id}`, actividadActualizada)
      .subscribe(
        (response: any) => {
          console.log('✅ Actividad actualizada:', response);
          
          // Actualizar el array local
          this.actividades[this.actividadIndex] = { ...this.actividadEditando };
          
          // Cerrar el popup
          this.cerrarPopup();
          
          alert('✅ Actividad actualizada correctamente');
        },
        error => {
          console.error('❌ Error al actualizar:', error);
          
          if (error.status === 404) {
            alert('❌ Actividad no encontrada');
          } else if (error.status === 422) {
            alert('❌ Error de validación. Revisa los campos.');
          } else if (error.status === 500) {
            alert('❌ Error del servidor. Revisa que la tabla activities exista.');
          } else {
            alert('❌ Error al conectar con el servidor');
          }
        }
      );
  }

  // Cerrar popup
  cerrarPopup() {
    const checkbox = document.getElementById(`popup-${this.actividadIndex}`) as HTMLInputElement;
    if (checkbox) {
      checkbox.checked = false;
    }
  }


  volverDashboard() {
    this.router.navigate(['/dashboard']);
    console.log("Volver al dashboard");}
    
  administrarUsuarios() {}
  gestionarInfoMedica() {}
  gestionarAlojamientos() {}


  // Métodos de navegación
  volverInicio() {
    console.log('Volver al inicio');
    // Agrega aquí tu lógica de navegación
  }

  administrarUsuarios() {
    console.log('Administrar usuarios');
    // Agrega aquí tu lógica de navegación
  }

  gestionarInfoMedica() {
    console.log('Gestionar información médica');
    // Agrega aquí tu lógica de navegación
  }

  gestionarAlojamientos() {
    console.log('Gestionar alojamientos');
    // Agrega aquí tu lógica de navegación
  }
}