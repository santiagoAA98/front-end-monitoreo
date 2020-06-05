import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { Atleta } from 'src/app/core/models/atleta.model';
import { AtletaDataService } from 'src/app/core/services/atleta-data.service';

@Component({
  selector: 'app-entrenador-evento',
  templateUrl: './entrenador-evento.component.html',
  styleUrls: ['./entrenador-evento.component.css']
})
export class EntrenadorEventoComponent implements OnInit {

  cedulaEntrenador: number;
  nombreEntrenador: string;
  atletas: Atleta[] = [];

  constructor(private auth: AuthService,
              private actuvatedRoute: ActivatedRoute,
              private atletaService: AtletaDataService) { }

  ngOnInit() {
    this.cargarDatos();
  }

  cargarDatos() {
    this.actuvatedRoute.params.subscribe( params => {
      this.cedulaEntrenador = params.cedulaEntrenador;
      this.nombreEntrenador = params.nombreEntrenador;
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

  cerrarSesion() {
    this.auth.cerrarSesion();
  }

}
