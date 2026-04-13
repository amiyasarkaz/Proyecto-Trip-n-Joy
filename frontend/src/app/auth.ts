import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  logged = false;
  user: any = null;
  private apiUrl = 'http://localhost/api';

  constructor(private http: HttpClient) {}

  register(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, userData);
  }

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  logout(): Observable<any> {
    return this.http.post(`${this.apiUrl}/logout`, {});
  }

  saveToken(token: string) {
    localStorage.setItem('token', token);
    this.logged = true;
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  clearToken() {
    localStorage.removeItem('token');
    this.logged = false;
    this.user = null;
  }

  checkLogin() {
    return this.http.get(`${this.apiUrl}/auth/check`).subscribe((res: any) => {
      this.logged = res.logged;
      this.user = res.user;
    });
  }
}