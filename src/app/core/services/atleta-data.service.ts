import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Atleta } from '../models/atleta.model';

@Injectable({
  providedIn: 'root'
})
export class AtletaDataService {

  atleta: Atleta;
  url = 'http://localhost/monitoreo-atleta/Controllers/';

  constructor(private http: HttpClient) { }

  getAtleta(usuarioSesion: any) {

    const data = {
      usuario : usuarioSesion
    };

    return this.http.post<Atleta>(`${this.url}controllerConsultarAtleta.php`, JSON.stringify(data));
  }

  getAtletasEntrenador(cedula: number) {
      const data = {
        cedulaEntrenador : cedula
      };

      return this.http.post(`${this.url}controllerConsultarAtletasEntrenador.php`, JSON.stringify(data));
  }

  crearAtleta(atletaData) {
    console.log(atletaData);
    this.http.post(`${this.url}controllerCrearAtleta.php`, JSON.stringify(atletaData)).subscribe( resp => console.log(resp));
  }

  getCedulas(): any {
    return this.http.get(`${this.url}controllerConsultarCedulasAtletas.php`);
  }

  eliminarAtleta(cedulaAtleta: any) {
    this.http.post(`${this.url}controllerEliminarAtleta.php`, JSON.stringify(cedulaAtleta)).subscribe( resp => console.log(resp));
  }

  actualizarAtleta() {}

  actualizarMarcaAtleta() {}

}
