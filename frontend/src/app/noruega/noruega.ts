import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-noruega',
  standalone: true,
  templateUrl: './noruega.html',
  styleUrls: ['./noruega.css']
})
export class Noruega {

  constructor(private router: Router) {}

  goTo(destino: string) {
    this.router.navigate([destino]);
  }
}
