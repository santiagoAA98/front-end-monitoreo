import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { EntrenadorDataService } from 'src/app/core/services/entrenador-data.service';
import { AtletaDataService } from 'src/app/core/services/atleta-data.service';
import { Entrenador } from 'src/app/core/models/entrenador.model';
import { Atleta } from 'src/app/core/models/atleta.model';
import { InformeService } from 'src/app/core/services/informe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entrenador-home',
  templateUrl: './entrenador-home.component.html',
  styleUrls: ['./entrenador-home.component.css']
})
export class EntrenadorHomeComponent implements OnInit {

  tipoFormulario: any;
  entrenador: Entrenador;
  atletas: Atleta[] = [];
  atletaSeleccionado: Atleta;
  perfil = 'entrenador';
  informe = {};

  constructor(private auth: AuthService,
              private entrenadorService: EntrenadorDataService,
              private atletaService: AtletaDataService,
              private informeService: InformeService,
              private router: Router) { }

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
        console.log(this.atletas);
      }
    });
  }

  verificarAtletaEditar() {
    if (this.atletaSeleccionado) {
      this.tipoFormulario = 'editarAtleta';
    } else {
      alert('Selecciona primero un atleta');
    }
  }

  eliminarAtleta() {
    if (this.atletaSeleccionado) {
      const data = {
        cedula_atleta : this.atletaSeleccionado.cedulaAtleta
      };

      this.atletaService.eliminarAtleta(data);
      this.atletas = [];
      alert('Atleta eliminado');
      this.consultarMisAtletas();
    } else {
      alert('Selecciona primero un atleta para eliminar');
    }
  }

  obtenerAtletaSeleccionado(cedula: any) {
    const busquedaAtleta = this.atletas.filter( atleta => atleta.cedulaAtleta === cedula );
    this.atletaSeleccionado = busquedaAtleta[0];
  }

  obtenerInforme() {
    this.informeService.generarInformeEntranador(this.entrenador.cedulaEntrenador).subscribe((resp: any) => {
      console.log(resp);
      this.informe = resp;
    });
  }

  observarAtleta() {
    if (this.atletaSeleccionado) {
      this.router.navigate(['entrenador/observar-atleta', this.atletaSeleccionado.cedulaAtleta, 
                      this.entrenador.cedulaEntrenador, this.entrenador.nombre]);
    } else {
      alert('Selecciona un atleta para observar');
    }
  }

  cerrarSesion() {
    this.auth.cerrarSesion();
  }
}
