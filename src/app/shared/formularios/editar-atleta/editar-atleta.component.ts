import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AtletaDataService } from 'src/app/core/services/atleta-data.service';


@Component({
  selector: 'app-editar-atleta',
  templateUrl: './editar-atleta.component.html',
  styleUrls: ['./editar-atleta.component.css']
})
export class EditarAtletaComponent implements OnInit {

  myForm: FormGroup;

  constructor(private formB: FormBuilder,
              private atletaService: AtletaDataService) { }

  ngOnInit() {
    this.crearformulario();
  }

  crearformulario() {
    this.myForm = this.formB.group({
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      edad: [, Validators.required],
      telefono: [, Validators.required],
      correo: ['', Validators.required],
      estatura: [, Validators.required],
      peso: [, Validators.required],
      talla_camisa: [, Validators.required],
      tipo_sangre: ['', Validators.required],
      alergias: ['', Validators.required],
      operacioens: ['', Validators.required],
      lesiones_graves: ['', Validators.required],
      fracturas: ['', Validators.required],
      sexo: ['', Validators.required],
    });
  }

  actualizarAtleta() {
    console.log(this.myForm);
  }

}
