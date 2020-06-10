import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Entrenador } from 'src/app/core/models/entrenador.model';
import { EntrenadorDataService } from 'src/app/core/services/entrenador-data.service';

@Component({
  selector: 'app-editar-entrenador',
  templateUrl: './editar-entrenador.component.html',
  styleUrls: ['./editar-entrenador.component.css']
})
export class EditarEntrenadorComponent implements OnInit {

  @Input()
  entrenador: Entrenador;

  myForm: FormGroup;

  constructor(private formB: FormBuilder,
              private entrenadorService: EntrenadorDataService) { }

  ngOnInit() {
    this.crearformulario();
  }

  crearformulario() {
    this.myForm = this.formB.group({
      nombre: [this.entrenador.nombre , Validators.required],
      apellidos: [this.entrenador.apellidos , Validators.required],
      telefono: [this.entrenador.telefono , Validators.required],
      correo: [ this.entrenador.correo , Validators.required],
    });
  }

  actualizarEntrenador() {
    const data = {
      cedula: this.entrenador.cedulaEntrenador,
      nombre: this.myForm.controls.nombre.value,
      apellidos: this.myForm.controls.apellidos.value,
      telefono: this.myForm.controls.telefono.value,
      correo: this.myForm.controls.correo.value
    };

    this.entrenadorService.actualizarEntrenador(data);
    alert('El entrenador se actualizo con éxito');
    window.location.reload();
  }

}
