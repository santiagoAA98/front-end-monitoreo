import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sesion } from '../models/sesion.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  estadoSesion: string;
  url = 'http://localhost/monitoreo-atleta/Controllers/controllerSesion.php';

  constructor(private http: HttpClient) {}

  iniciarSesion(sesionUsuario: Sesion){
    return this.http.post(this.url, JSON.stringify(sesionUsuario)
    ).pipe(
      map( resp => {
        this.guardarInfo(resp);
        return resp;
      })
    );
  }

  guardarInfo(datos: any) {
    if (datos.estado === 'ok') {
      localStorage.setItem('usuario', datos.usuario);
      localStorage.setItem('rol', datos.rol);
    }

    this.estadoSesion = datos.estado;
  }

  estaAutenticado() {
    if(this.estadoSesion === 'ok') {
      return true;
    }
  }
}
