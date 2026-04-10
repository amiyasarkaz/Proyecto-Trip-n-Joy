import { Component } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { Registro } from './registro/registro';
import { Login } from './login/login';
import { Bienvenido } from './bienvenido/bienvenido';
import { Home } from './home/home';
import { QueOfrecemosComponent } from './que-ofrecemos/que-ofrecemos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Home,
    QueOfrecemosComponent,
    RouterOutlet,
    Registro,
    Login,
    Bienvenido
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {}
