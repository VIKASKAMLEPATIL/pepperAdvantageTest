import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnDestroy{
  loginForm!: FormGroup;
  constructor(private fb: FormBuilder, private route: Router, public authService: AuthService) {}

  ngOnInit() {}

  ngOnDestroy() {
    this.authService.loginForm.reset();
  }

  onSubmit() {
    // Handle form submission here
    if (this.authService.loginForm.valid) {
      const credentials = this.authService.getUserCredentials();
      this.route.navigate(['/home']);
    }
  }
}
