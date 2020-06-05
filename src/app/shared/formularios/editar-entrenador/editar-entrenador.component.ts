import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { EntrenadorDataService } from 'src/app/core/services/entrenador-data.service';

@Component({
  selector: 'app-editar-entrenador',
  templateUrl: './editar-entrenador.component.html',
  styleUrls: ['./editar-entrenador.component.css']
})
export class EditarEntrenadorComponent implements OnInit {

  myForm: FormGroup;

  constructor(private formB: FormBuilder,
              private entrenadorService: EntrenadorDataService) { }

  ngOnInit() {
    this.crearformulario();
  }

  crearformulario() {
    this.myForm = this.formB.group({
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      telefono: [, Validators.required],
      correo: ['', Validators.required],
    });
  }

  actualizarEntrenador() {
    console.log(this.myForm);
  }

}
