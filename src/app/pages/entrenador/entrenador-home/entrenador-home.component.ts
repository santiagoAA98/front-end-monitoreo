import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { EntrenadorDataService } from 'src/app/core/services/entrenador-data.service';
import { AtletaDataService } from 'src/app/core/services/atleta-data.service';
import { Entrenador } from 'src/app/core/models/entrenador.model';
import { Atleta } from 'src/app/core/models/atleta.model';

@Component({
  selector: 'app-entrenador-home',
  templateUrl: './entrenador-home.component.html',
  styleUrls: ['./entrenador-home.component.css']
})
export class EntrenadorHomeComponent implements OnInit {

  formEditar = false;
  entrenador: Entrenador;
  atletas: Atleta[] = [];
  cedulaAtletaSeleccionado: any;

  constructor(private auth: AuthService,
              private entrenadorService: EntrenadorDataService,
              private atletaService: AtletaDataService) { }

  ngOnInit() {
    this.consultarEntrenador();
  }

  consultarEntrenador(): any {
    this.entrenadorService.getEntrenador(localStorage.getItem('usuario')).subscribe( (resp: any ) => {
      this.entrenador = new Entrenador(resp);
      this.consultarMisAtletas();
    });
  }

  consultarMisAtletas() {
    this.atletaService.getAtletasEntrenador(this.entrenador.cedulaEntrenador).subscribe( (resp: any) => {
      for (const iterador of resp) {
        const atleta = new Atleta(iterador);
        this.atletas.push(atleta);
      }
    });
  }

  obtenerAtletaSeleccionado(cedula: any) {
    this.cedulaAtletaSeleccionado = cedula;
  }

  cerrarSesion() {
    this.auth.cerrarSesion();
  }
}
