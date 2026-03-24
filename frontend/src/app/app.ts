import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Registro } from './registro/registro';
import { Login } from './login/login';
import { Header } from './shared/header/header';
import { Bienvenido } from './bienvenido/bienvenido';
import { Planear } from './planear/planear'; 
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    Registro, 
    Login,
    Header,
    Bienvenido,
    Planear 
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {}