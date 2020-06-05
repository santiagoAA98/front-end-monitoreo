import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdministradorDataService {

  url = 'http://localhost/monitoreo-atleta/Controllers/';

  constructor(private http: HttpClient) { }

  actualizarInfoAdministrador(admin: any) {
    this.http.post(`${this.url}controllerActualizarAdministrador.php`, JSON.stringify(admin)).subscribe();
  }

  getAdministrador() {
    return this.http.get(`${this.url}controllerConsultarAdministrador.php`);
  }

}
