import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Login } from './login/login';
import { Registro } from './registro/registro';
import { Bienvenido } from './bienvenido/bienvenido';
import { QueOfrecemosComponent } from './que-ofrecemos/que-ofrecemos';
import { Planear } from './planear/planear'; 
import { PaginaPrincipal } from './pagina-principal/pagina-principal';
import { Dashboard } from './admin/dashboard/dashboard';
import { Noruega } from './noruega/noruega';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'login', component: Login },
  { path: 'registro', component: Registro },
  { path: 'bienvenido', component: Bienvenido },
  { path: 'que-ofrecemos', component: QueOfrecemosComponent },
  { path: 'planear', component: Planear },
  { path: 'inicio-usuario', component: PaginaPrincipal },
  { path: 'admin', component: Dashboard },
  { path: 'noruega', component: Noruega }
];