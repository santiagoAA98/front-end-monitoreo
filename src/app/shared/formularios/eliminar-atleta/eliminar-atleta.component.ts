import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AtletaDataService } from 'src/app/core/services/atleta-data.service';

@Component({
  selector: 'app-eliminar-atleta',
  templateUrl: './eliminar-atleta.component.html',
  styleUrls: ['./eliminar-atleta.component.css']
})
export class EliminarAtletaComponent implements OnInit {

  myForm: FormGroup;
  cedulasAtletas: any[] = [];

  constructor(private formB: FormBuilder,
              private atletaService: AtletaDataService) { }

  ngOnInit() {
    this.consultarCedulasAtletas();
    this.crearformulario();
  }

  consultarCedulasAtletas() {
    this.atletaService.getCedulas().subscribe( (resp: any) => {
      this.cedulasAtletas = resp;
    });
  }

  crearformulario() {
    this.myForm = this.formB.group({
      cedula_atleta: [, Validators.required],
    });
  }

  eliminarAtleta() {
    if (this.myForm.controls.cedula_atleta.value) {
      const data = {
        cedula_atleta : this.myForm.controls.cedula_atleta.value
      };

      this.atletaService.eliminarAtleta(data);
      alert('Atleta eliminado');
      this.ngOnInit();
    } else {
      alert('No se ha escogido atleta');
    }
  }

}
