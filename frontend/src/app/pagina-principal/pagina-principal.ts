import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],
  templateUrl: './pagina-principal.html',
  styleUrls: ['./pagina-principal.css']
})
export class PaginaPrincipal {
  userName = '';
  userPhoto = '';

   constructor(private router: Router) {}

  goTo(destino: string) {
    this.router.navigate([destino]);
  }

  goNoruega() {
  this.router.navigate(['/noruega']);
}

goAlemania() {
  this.router.navigate(['/alemania']);
}
goFrancia() {
  this.router.navigate(['/francia']);
}

irAQueOfrecemos() {
    this.router.navigate(['/que-ofrecemos']);
  }

  irARedesSociales() {
    this.router.navigate(['/redes-sociales']);
  }
}