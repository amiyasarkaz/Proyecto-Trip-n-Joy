import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { Login } from './login/login';
import { Registro } from './registro/registro';
import { Bienvenido } from './bienvenido/bienvenido';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: Login },
  { path: 'registro', component: Registro },
  { path: 'bienvenido', component: Bienvenido }
];
  