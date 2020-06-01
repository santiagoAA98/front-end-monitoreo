import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sesion } from '../models/sesion.model';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = 'http://localhost/monitoreo-atleta/Controllers/controllerSesion.php';

  constructor( private http: HttpClient,
               private router: Router) {}

  iniciarSesion(sesionUsuario: Sesion){
    return this.http.post(this.url, JSON.stringify(sesionUsuario)
    ).pipe(
      map( resp => {
        this.guardarInfo(resp);
        return resp;
      })
    );
  }

  cerrarSesion() {
    localStorage.removeItem('usuario');
    localStorage.removeItem('rol');
    this.router.navigateByUrl('/login');
  }

  guardarInfo(datos: any) {
    if (datos.estado === 'ok') {
      localStorage.setItem('usuario', datos.usuario);
      localStorage.setItem('rol', datos.rol);
    }
  }
}
