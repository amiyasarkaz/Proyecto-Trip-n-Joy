import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'redes-sociales',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './redes-sociales.html',
  styleUrls: ['./redes-sociales.css']
})
export class RedesSociales {

  constructor(private router: Router) {}

  volver() {
    this.router.navigate(['/pagina-principal']);
  }
}
