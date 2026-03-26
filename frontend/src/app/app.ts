import { Component } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { Registro } from './registro/registro';
import { Login } from './login/login';
import { Header } from './shared/header/header';
import { Bienvenido } from './bienvenido/bienvenido';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    Registro,
    Login,
    Header,
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
