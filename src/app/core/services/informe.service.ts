import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InformeService {

  url = 'http://localhost/monitoreo-atleta/Controllers/';

  constructor(private http: HttpClient) { }

  generarInformeGeneral(): any {
    return this.http.get(`${this.url}/controllerObtenerInformeGeneral.php`);
  }

  generarInformeAtleta(cedulaAtleta): any {
    const data = {
      cedula: cedulaAtleta
    };

    return this.http.post(`${this.url}/controllerObtenerInformeAtleta.php`, data);
  }

  generarInformeEntranador(cedulaEntrenador): any {
    const data = {
      cedula: cedulaEntrenador
    };

    return this.http.post(`${this.url}/controllerObtenerInformeEntrenador.php`, data);
  }

}
