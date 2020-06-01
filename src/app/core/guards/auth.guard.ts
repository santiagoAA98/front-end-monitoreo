import { Injectable } from '@angular/core';
import {  CanActivate, ActivatedRouteSnapshot, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements  CanActivate {

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const rol = localStorage.getItem('rol');
    const url = `/${rol}`;

    if (route.data.rol === rol) {
      return true;
    } else if (rol) {
      this.router.navigateByUrl(url);
      return false;
    } else {
      this.router.navigateByUrl('/login');
      return false;
    }
  }
}



