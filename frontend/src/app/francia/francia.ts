import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-francia',
  imports: [],
  templateUrl: './francia.html',
  styleUrl: './francia.css',
})
export class Francia {
  
  constructor(private router: Router) {}

  goTo(destino: string) {
    this.router.navigate([destino]);
  }

  goMarsella() {
  this.router.navigate(['/marsella']);
}

goToulouse() {
  this.router.navigate(['/toulouse']);
}
goTours() {
  this.router.navigate(['/tours']);
}
}
