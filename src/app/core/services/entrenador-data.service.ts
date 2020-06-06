import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EntrenadorDataService {

  url = 'http://localhost/monitoreo-atleta/Controllers/';

  constructor(private http: HttpClient) { }

  getEntrenador(usuarioEntrenador: any): any {
    const data = {
      usuario: usuarioEntrenador
    };

    return this.http.post(`${this.url}controllerConsultarEntrenador.php`, JSON.stringify(data));
  }

  crearEntrenador(entrenadorData: any) {
    console.log(entrenadorData);
    this.http.post(`${this.url}controllerCrearEntrenador.php`, JSON.stringify(entrenadorData)).subscribe( resp => console.log(resp));
  }

  getCedulas(): any {
    return this.http.get(`${this.url}controllerConsultarCedulasEntrenador.php`);
  }

  eliminarEntrenador(cedulaEntrenador: any) {
    this.http.post(`${this.url}controllerEliminarEntrenador.php`, JSON.stringify(cedulaEntrenador)).subscribe( resp => console.log(resp));
  }

  actualizarEntrenador(entrenador: any) {
    this.http.post(`${this.url}controllerActualizarEntrenador.php`, JSON.stringify(entrenador)).subscribe(resp => console.log(resp));
  }

}
