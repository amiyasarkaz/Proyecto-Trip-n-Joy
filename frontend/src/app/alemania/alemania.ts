import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alemania',
  imports: [],
  templateUrl: './alemania.html',
  styleUrl: './alemania.css',
})
export class Alemania {
  
  constructor(private router: Router) {}

  goTo(destino: string) {
    this.router.navigate([destino]);
  }
}
