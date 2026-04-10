import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'redes-sociales',
  standalone: true,
  templateUrl: './redes-sociales.html',
  styleUrls: ['./redes-sociales.css']
})
export class RedesSociales {

  constructor(private router: Router) {}

  volver() {
    this.router.navigate(['/']);
  }
}
