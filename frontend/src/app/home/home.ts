
import { Component, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'home',
  standalone: true,
  imports: [Router], 
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})

export class Home {
  constructor(private router: Router) {}

  irAQueOfrecemos() {
    this.router.navigate(['/que-ofrecemos']);
  }
}

