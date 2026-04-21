
import { Component, EventEmitter } from '@angular/core';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'home',
  standalone: true,
  imports: [RouterModule], 
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})

export class Home {
  constructor(private router: Router) {}

  irAQueOfrecemos() {
    this.router.navigate(['/que-ofrecemos']);
  }
  
}

