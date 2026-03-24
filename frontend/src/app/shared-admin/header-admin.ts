import { Component } from '@angular/core';
import { AuthService } from '../auth';

@Component({
  standalone: true,
  templateUrl: './header-admin.html',
  styleUrls: ['./header-admin.css']
})
export class HeaderAdmin {
  constructor(public auth: AuthService) {}
}
