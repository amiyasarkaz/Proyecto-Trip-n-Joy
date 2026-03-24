import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../auth';

@Injectable({ providedIn: 'root' })
export class adminGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) {}

  canActivate() {
    if (this.auth.logged && this.auth.user?.role === 'admin') {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}
