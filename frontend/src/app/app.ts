import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Registro } from './registro/registro';
import { Login } from './login/login';
import { HeaderPublico } from './shared/header/header-publico';
import { Bienvenido } from './bienvenido/bienvenido'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    Registro, 
    Login,
    HeaderPublico,
    Bienvenido 
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {}