import { Routes } from '@angular/router';
import { Dashboard } from './dashboard';
import { adminGuard } from './admin.guard';


export const adminRoutes: Routes = [
  { path: 'admin/dashboard', component: Dashboard, canActivate: [adminGuard] }
];
