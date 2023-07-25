import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService, } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}
  canActivate(): boolean {
    // Check your authentication logic here
    // Example: if user is authenticated, return true; otherwise, navigate to login and return false
      const expectedUsername = 'vikas';
      const expectedPassword = 'vikas07';
  
      const { username, password } = this.authService.getUserCredentials();
  
      if (username === expectedUsername && password === expectedPassword) {
        return true;
      } else {
        this.router.navigate(['/login']);
        return false;
      }
    }
  }
  

