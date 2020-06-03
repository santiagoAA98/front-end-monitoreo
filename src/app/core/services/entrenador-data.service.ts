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

}
