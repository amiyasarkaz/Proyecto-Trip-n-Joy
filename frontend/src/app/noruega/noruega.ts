import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-noruega',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './noruega.html',
  styleUrls: ['./noruega.css']
})
export class Noruega {

  constructor(private router: Router) {}

  goTo(destino: string) {
    this.router.navigate([destino]);
  }
  goOslo() {
  this.router.navigate(['/oslo']);
}

goBergen() {
  this.router.navigate(['/bergen']);
}
goStavanger() {
  this.router.navigate(['/stavanger']);
}


}
