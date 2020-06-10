import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Atleta } from 'src/app/core/models/atleta.model';
import { AtletaDataService } from 'src/app/core/services/atleta-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-observar-atleta',
  templateUrl: './observar-atleta.component.html',
  styleUrls: ['./observar-atleta.component.css']
})
export class ObservarAtletaComponent implements OnInit {

  atletas: Atleta[] = [];
  atleta: Atleta;
  cedulaAtleta: any;
  cedulaEntrenador: any;
  nombreEntrenador: any;
  atletaSeleccionado: Atleta;

  constructor(private auth: AuthService,
              private atletaService: AtletaDataService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.cargarDatos();
  }

  consultarAtleta() {
    this.atletaService.getAtletaCedula(this.cedulaAtleta).subscribe(
      resp => {
        this.atleta = new Atleta(resp);
      });
  }

  cargarDatos() {
    this.activatedRoute.params.subscribe( params => {
      this.cedulaAtleta = params.cedulaAtleta;
      this.cedulaEntrenador = params.cedulaEntrenador;
      this.nombreEntrenador = params.nombreEntrenador;

      this.consultarAtleta();
      this.obtenerMisAtletas();
    });
  }

  obtenerMisAtletas() {
    this.atletaService.getAtletasEntrenador(this.cedulaEntrenador).subscribe( (resp: any) => {
      for (const iterador of resp) {
        const atleta = new Atleta(iterador);
        this.atletas.push(atleta);
      }
    });
  }

  obtenerAtletaSeleccionado(cedula: any) {
    const busquedaAtleta = this.atletas.filter( atleta => atleta.cedulaAtleta === cedula );
    this.atleta = busquedaAtleta[0];
    this.cedulaAtleta = this.atleta.cedulaAtleta;
  }

  cerrarSesion() {
    this.auth.cerrarSesion();
  }

}
