import { Injectable } from '@angular/core';
import {  CanActivate, ActivatedRouteSnapshot, Router} from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements  CanActivate {

  constructor( private auth: AuthService,
               private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const rol = localStorage.getItem('rol');
    console.log(route.data.rol);
    console.log(rol);

    if (route.data.rol === rol) {
        return true;
    } else if (rol === 'entrenador') {
      this.router.navigateByUrl('/entrenador');
      return false;
    } else if (rol === 'administrador') {
      this.router.navigateByUrl('/administrador');
      return false;
    } else if (rol === 'atleta') {
      this.router.navigateByUrl('/atleta');
      return false;
    } else {
      this.router.navigateByUrl('/login');
      return false;
    }
  }
}



