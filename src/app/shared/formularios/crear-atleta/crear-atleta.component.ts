import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AtletaDataService } from 'src/app/core/services/atleta-data.service';

@Component({
  selector: 'app-crear-atleta',
  templateUrl: './crear-atleta.component.html',
  styleUrls: ['./crear-atleta.component.css']
})
export class CrearAtletaComponent implements OnInit {

  myForm: FormGroup;

  constructor(private formB: FormBuilder,
              private atletaService: AtletaDataService) { }

  ngOnInit() {
    this.crearformulario();
  }

  crearformulario() {
    this.myForm = this.formB.group({
      usuario: ['', Validators.required],
      clave: ['', Validators.required],
      cedula_atleta: [, Validators.required],
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      edad: [, Validators.required],
      telefono: [, Validators.required],
      correo: ['', Validators.required],
      estatura: [, Validators.required],
      peso: [, Validators.required],
      talla_camisa: [, Validators.required],
      tipo_sangre: ['', Validators.required],
      alergias: ['', Validators.required],
      operaciones: ['', Validators.required],
      lesiones_graves: ['', Validators.required],
      fracturas: ['', Validators.required],
      sexo: ['', Validators.required],
      especialidades: ['', Validators.required],
      año_activo: [, Validators.required],
      pruebas: ['', Validators.required],
    });
  }

  crearAtleta() {
    console.log(this.myForm);
  }
}
