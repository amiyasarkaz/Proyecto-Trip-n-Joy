import { Component } from '@angular/core';
import { HeaderAdmin } from '../shared-admin/header-admin';
import { AuthService } from '../auth';

@Component({
  standalone: true,
  imports: [HeaderAdmin],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class Dashboard {
  constructor(public auth: AuthService) {}
}
