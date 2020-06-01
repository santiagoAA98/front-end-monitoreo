import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    const rol = localStorage.getItem('rol');
    const url = `/${rol}`;

    if (!rol) {
      return true;
    }

    this.router.navigateByUrl(url);
    return false;
  }
}
