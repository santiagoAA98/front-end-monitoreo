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
    const data = {
      usuario: this.myForm.controls.usuario.value,
      clave: this.myForm.controls.clave.value,
      cedula_atleta: this.myForm.controls.cedula_atleta.value,
      nombre: this.myForm.controls.nombre.value,
      apellidos: this.myForm.controls.apellidos.value,
      edad: this.myForm.controls.edad.value,
      telefono: this.myForm.controls.telefono.value,
      correo: this.myForm.controls.correo.value,
      estatura: this.myForm.controls.estatura.value,
      peso: this.myForm.controls.peso.value,
      talla_camisa: this.myForm.controls.talla_camisa.value,
      tipo_sangre: this.myForm.controls.tipo_sangre.value,
      alergias: this.myForm.controls.alergias.value,
      operaciones: this.myForm.controls.operaciones.value,
      lesiones_graves: this.myForm.controls.lesiones_graves.value,
      fracturas: this.myForm.controls.fracturas.value,
      sexo: this.myForm.controls.sexo.value,
      especialidades: this.myForm.controls.especialidades.value,
      año_activo: this.myForm.controls.año_activo.value,
      pruebas: this.myForm.controls.pruebas.value,
    };


    this.atletaService.crearAtleta(data);
  }
}
