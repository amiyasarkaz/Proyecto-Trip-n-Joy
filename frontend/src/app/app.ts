import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('frontend');
  protected mensaje = signal('Cargando...');
  protected datos = signal<any>(null);
  protected error = signal<string | null>(null);
  protected color = signal('blue');

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('http://localhost/api/test').subscribe({
      next: (data) => {
        this.datos.set(data);
        this.mensaje.set('✅ Conectado a Laravel');
        this.color.set('green');
      },
      error: (err) => {
        this.error.set(err.message);
        this.mensaje.set('❌ Error de conexión');
        this.color.set('red');
      }
    });
  }
}