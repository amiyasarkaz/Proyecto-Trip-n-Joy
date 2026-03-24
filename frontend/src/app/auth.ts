import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  logged = false;
  user: any = null;

  constructor(private http: HttpClient) {}

  checkLogin() {
    return this.http.get('http://localhost:8000/api/auth/check')
      .subscribe((res: any) => {
        this.logged = res.logged;
        this.user = res.user;
      });
  }
}
