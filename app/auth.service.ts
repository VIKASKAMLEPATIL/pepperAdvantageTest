import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  getUserCredentials(): { username: string; password: string } {
    return {
      username: this.loginForm.get('username')?.value,
      password: this.loginForm.get('password')?.value,
    };
  }
}

