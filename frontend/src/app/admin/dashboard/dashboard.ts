import { HeaderAdmin } from '../../shared-admin/header-admin';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [HeaderAdmin],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class Dashboard {}
