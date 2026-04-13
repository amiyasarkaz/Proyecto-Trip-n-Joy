import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'oslo',
  standalone: true,
  templateUrl: './oslo.html',
  styleUrls: ['./oslo.css']
})
export class Oslo {

  constructor(private router: Router) {}

  volver() {
    this.router.navigate(['/noruega']);
  }
}
