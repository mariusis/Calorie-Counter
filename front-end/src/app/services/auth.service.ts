import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  constructor(private http: HttpClient) {
    this.updateAuthenticationStatus();
  }

  getAuthenticationStatus(): Observable<boolean> {
    return this.isLoggedInSubject.asObservable();
  }

  getUserFromToken(token: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    // Replace 'yourApiEndpoint' with the actual endpoint on your Spring Boot backend.
    return this.http.get('http://localhost:8080/api/v1/auth/extractUser', {
      headers,
    });
  }
  getUserId(token: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    // Replace 'yourApiEndpoint' with the actual endpoint on your Spring Boot backend.
    return this.http.get('http://localhost:8080/api/v1/auth/extractUserId', {
      headers,
    });
  }
  updateAuthenticationStatus() {
    const isLoggedIn = localStorage.getItem('jwt') !== null;
    this.isLoggedInSubject.next(isLoggedIn);
  }

  logOut() {
    localStorage.removeItem('jwt');
    this.updateAuthenticationStatus();
  }
}
