import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  standalone: true,
  templateUrl: './header-privado.html',
  styleUrls: ['./header-privado.css']
})
export class HeaderPrivado {
  constructor(public auth: AuthService) {}
}
