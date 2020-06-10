import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  url = 'http://localhost/monitoreo-atleta/Controllers/';

  constructor(private http: HttpClient) { }

  crearEvento(evento: any) {
    this.http.post(`${this.url}controllerCrearEvento.php`, evento).subscribe( resp => console.log(resp));
  }

  consultarEventosDisponibles(cedulaAtleta: any): any {
    return this.http.post(`${this.url}controllerConsultarEventosDisponibles.php`, cedulaAtleta);
  }

  consultarMejoresResultadosAtleta(cedulaAtleta: any): any {
    return this.http.post(`${this.url}controllerObtenerMejoresResultados.php`, cedulaAtleta);
  }

  agregarResultado(resultado: any) {
    this.http.post(`${this.url}controllerAgregarResultadoEvento.php`, resultado).subscribe( resp => console.log(resp));
  }
}
