import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { EntrenadorDataService } from 'src/app/core/services/entrenador-data.service';
import { Entrenador } from 'src/app/core/models/entrenador.model';

@Component({
  selector: 'app-entrenador-home',
  templateUrl: './entrenador-home.component.html',
  styleUrls: ['./entrenador-home.component.css']
})
export class EntrenadorHomeComponent implements OnInit {

  entrenador: Entrenador;

  constructor(private auth: AuthService,
              private entrenadorService: EntrenadorDataService) { }

  ngOnInit() {
    this.consultarEntrenador();
  }

  consultarEntrenador() {
    this.entrenadorService.getEntrenador(localStorage.getItem('usuario')).subscribe( (resp: any ) => {
      this.entrenador = new Entrenador(resp);
    });
  }

  cerrarSesion() {
    this.auth.cerrarSesion();
  }
}
