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

  getAtletasEntrenador() {}

  crearAtleta() {}

  elminarAtleta() {}

  actualizarAtleta() {}

  actualizarMarcaAtleta() {}

}
