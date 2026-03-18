import { Component } from '@angular/core';
import { Router, NavigationEnd, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class HeaderComponent {
  currentUrl = '/';

  constructor(private router: Router) {
    this.router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe((e: any) => {
      this.currentUrl = e.urlAfterRedirects || e.url;
    });
  }

  isActive(path: string) {
    return this.currentUrl === path;
  }

  get firstLabel() {
    return this.isActive('/valoraciones') ? 'Pagina Principal' : 'VALORACIONES';
  }

  get secondLabel() {
    return this.isActive('/que-ofrecemos') ? 'Pagina Principal' : 'QUE OFRECEMOS';
  }
}
