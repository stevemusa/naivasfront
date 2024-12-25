import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  isSubmitting: boolean = false; // Indicator for form submission state
  errorMessage: string | null = null; // Error message display
  private readonly apiEndpoint: string = 'http://localhost:5001/api/auth/login'; // API URL

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],  // Changed from email to username
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    this.errorMessage = null; // Reset error message
    if (this.loginForm.valid) {
      this.isSubmitting = true; // Set submitting state
      const loginData = {
        username: this.loginForm.get('username')?.value, // Use username here
        password: this.loginForm.get('password')?.value
      };

      // Define headers for login request
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
      });

      // Login API call
      this.http.post(this.apiEndpoint, loginData, { headers })
        .subscribe({
          next: (response: any) => {
            console.log('Login successful:', response);
            // Save the Bearer token to localStorage
            if (response && response.token) {
              localStorage.setItem('authToken', response.token);
            }
            // Navigate to dashboard or another page
            this.router.navigate(['/dashboard']);
          },
          error: (error) => {
            console.error('Login failed:', error);
            this.errorMessage = error.error?.message || 'An unexpected error occurred. Please try again.';
          },
          complete: () => {
            this.isSubmitting = false; // Reset submitting state
          }
        });
    } else {
      this.errorMessage = 'Please fill in the form correctly.';
      console.log('Form is invalid');
    }
  }
}
