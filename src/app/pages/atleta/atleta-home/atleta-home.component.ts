import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { AtletaDataService } from 'src/app/core/services/atleta-data.service';
import { Atleta } from 'src/app/core/models/atleta.model';

@Component({
  selector: 'app-atleta-home',
  templateUrl: './atleta-home.component.html',
  styleUrls: ['./atleta-home.component.css']
})
export class AtletaHomeComponent implements OnInit {

  formEditar = false;
  atleta: Atleta;

  constructor(private auth: AuthService,
              private atletaService: AtletaDataService) {  }

  ngOnInit() {
    this.consultarAtleta();
  }

  consultarAtleta() {
    this.atletaService.getAtleta(localStorage.getItem('usuario')).subscribe(
      resp => {
        this.atleta = new Atleta(resp);
      });
  }

  cerrarSesion() {
    this.auth.cerrarSesion();
  }
}
