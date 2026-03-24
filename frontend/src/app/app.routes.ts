import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { Login } from './login/login';
import { Registro } from './registro/registro';
import { Bienvenido } from './bienvenido/bienvenido';
import { QueOfrecemosComponent } from './que-ofrecemos/que-ofrecemos';
import { Planear } from './planear/planear'; 
import { PaginaPrincipal } from './pagina-principal/pagina-principal';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: Login },
  { path: 'registro', component: Registro },
  { path: 'bienvenido', component: Bienvenido },
  { path: 'que-ofrecemos', component: QueOfrecemosComponent },
  { path: 'planear', component: Planear },
  { path: 'inicio-usuario', component: PaginaPrincipal }
];