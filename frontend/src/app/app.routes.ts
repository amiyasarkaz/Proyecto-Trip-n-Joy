import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { Login } from './login/login';
import { Registro } from './registro/registro';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: Login },
  { path: 'registro', component: Registro }
];
