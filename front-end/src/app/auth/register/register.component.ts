import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { User } from '../../models/user.model';
import { RegisterRequest } from './registerRequest.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  apiUrl = 'http://localhost:8080/api/v1/auth/register';

  constructor(private http: HttpClient) {}
  registerRequest: RegisterRequest = new RegisterRequest();

  emailRegex = /^[A-Za-z0-9+_.-]+@(.+)$/; // Regular expression for email validation
  invalidEmailFormat = false; // Track email format validity

  passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/; // Password strength regex
  invalidPasswordFormat = false; // Track password strength validity

  isPasswordValid(password: string): boolean {
    return this.passwordRegex.test(password);
  }

  onSubmit() {
    this.invalidEmailFormat = !this.emailRegex.test(this.registerRequest.email);
    this.invalidPasswordFormat = !this.isPasswordValid(
      this.registerRequest.password
    );

    if (this.invalidEmailFormat || this.invalidPasswordFormat) {
      return; // Don't send the request if email or password format is invalid
    }

    // Reset the format flags
    this.invalidEmailFormat = false;
    this.invalidPasswordFormat = false;

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    this.http
      .post<RegisterRequest>(this.apiUrl, this.registerRequest, httpOptions)
      .subscribe(
        (response) => {
          // Handle a successful registration response here
          console.log('Registration successful', response);
        },
        (error) => {
          // Handle any registration errors here
          console.error('Registration failed', error);
        }
      );
  }
}
