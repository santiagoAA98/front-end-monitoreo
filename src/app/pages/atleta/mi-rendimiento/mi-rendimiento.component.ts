import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Atleta } from 'src/app/core/models/atleta.model';
import { AtletaDataService } from 'src/app/core/services/atleta-data.service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-mi-rendimiento',
  templateUrl: './mi-rendimiento.component.html',
  styleUrls: ['./mi-rendimiento.component.css']
})
export class MiRendimientoComponent implements OnInit {

  cedulaAtleta: any;
  atleta: Atleta;

  constructor(private activatedRoute: ActivatedRoute,
              private atletaService: AtletaDataService,
              private auth: AuthService) { }

  ngOnInit() {
    this.cargarDatos();
  }

  cargarDatos() {
    this.activatedRoute.params.subscribe( params => {
      this.cedulaAtleta = params.cedulaAtleta;

      this.consultarAtleta();
    });
  }

  consultarAtleta() {
    console.log(this.cedulaAtleta);

    this.atletaService.getAtletaCedula(this.cedulaAtleta).subscribe(
      resp => {
        this.atleta = new Atleta(resp);
      });
  }

  cerrarSesion() {
    this.auth.cerrarSesion();
  }
}
