import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginRequest } from './loginRequest.model';
import jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  apiUrl = 'http://localhost:8080/api/v1/auth/authenticate';

  text: string = '';
  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthService
  ) {}

  onSubmit() {
    // Create a request object with email and password
    const request: LoginRequest = {
      email: this.username,
      password: this.password,
    };
    var token = '';
    // Send the POST request to the /authenticate endpoint
    this.http.post(this.apiUrl, request).subscribe(
      (response: any) => {
        token = response.token;
        localStorage.setItem('jwt', token);
        this.authService.updateAuthenticationStatus();
        this.router.navigate(['/']);
      }
      // (error) => {
      //   console.error('Error:', error);
      // }
    );
  }
}
