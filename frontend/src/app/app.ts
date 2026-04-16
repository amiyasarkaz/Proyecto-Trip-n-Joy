import { Component } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './registro/registro';
import { Login } from './login/login';
import { Bienvenido } from './bienvenido/bienvenido';
import { Home } from './home/home';
import { QueOfrecemos } from './que-ofrecemos/que-ofrecemos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Home,
    QueOfrecemos,
    CommonModule,
    RouterOutlet,
    RegistroComponent,
    Login,
    Bienvenido
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})

export class AppComponent {

  isAdminPage = false;

  constructor(private router: Router) {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.isAdminPage = event.url.startsWith('/admin');
      }
    });
  }
}
