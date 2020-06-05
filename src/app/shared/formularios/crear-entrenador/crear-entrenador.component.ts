import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { EntrenadorDataService } from 'src/app/core/services/entrenador-data.service';


@Component({
  selector: 'app-crear-entrenador',
  templateUrl: './crear-entrenador.component.html',
  styleUrls: ['./crear-entrenador.component.css']
})
export class CrearEntrenadorComponent implements OnInit {

  myForm: FormGroup;

  constructor(private formB: FormBuilder,
              private entrenadorService: EntrenadorDataService) { }

  ngOnInit() {
    this.crearformulario();
  }

  crearformulario() {
    this.myForm = this.formB.group({
      usuario: ['', Validators.required],
      clave: ['', Validators.required],
      cedula_entrenador: [, Validators.required],
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      telefono: [, Validators.required],
      correo: ['', Validators.required],
      lugar: ['', Validators.required],
      hora: ['', Validators.required],
      dias: ['', Validators.required],
    });
  }

  crearEntrenador() {
    const data = {
      usuario: this.myForm.controls.usuario.value,
      clave: this.myForm.controls.clave.value,
      cedula_entrenador: this.myForm.controls.cedula_entrenador.value,
      nombre: this.myForm.controls.nombre.value,
      apellidos: this.myForm.controls.apellidos.value,
      telefono: this.myForm.controls.telefono.value,
      correo: this.myForm.controls.correo.value,
      lugar: this.myForm.controls.lugar.value,
      hora: this.myForm.controls.hora.value,
      dias: this.myForm.controls.dias.value
    };

    this.entrenadorService.crearEntrenador(data);
  }

}
