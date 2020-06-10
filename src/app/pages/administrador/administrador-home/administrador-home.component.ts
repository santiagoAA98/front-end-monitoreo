import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { AdministradorDataService } from 'src/app/core/services/administrador-data.service';
import { Administrador } from 'src/app/core/models/administrador.model';

@Component({
  selector: 'app-administrador-home',
  templateUrl: './administrador-home.component.html',
  styleUrls: ['./administrador-home.component.css']
})
export class AdministradorHomeComponent implements OnInit {

  administrador: Administrador;
  tipoFormulario = 'ninguno';

  constructor(private auth: AuthService,
              private administradorservice: AdministradorDataService) { }

  ngOnInit() {
    this.consultarAdministrador();
  }

  consultarAdministrador() {
      this.administradorservice.getAdministrador().subscribe( (resp: any) => {
        this.administrador = new Administrador(resp);
      });
  }

  cerrarSesion() {
    this.auth.cerrarSesion();
  }
}
