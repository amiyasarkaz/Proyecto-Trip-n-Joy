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

irAValoracionesGenerales() {
    this.router.navigate(['/valoraciones-generales']);
  }

  irARedesSociales() {
    this.router.navigate(['/redes-sociales']);
  }

  abrirPerfil() {
  const checkbox = document.getElementById('modal-perfil-toggle') as HTMLInputElement;
  if (checkbox) checkbox.checked = true;
}

}