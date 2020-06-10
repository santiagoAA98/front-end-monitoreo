import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { EntrenadorDataService } from 'src/app/core/services/entrenador-data.service';

@Component({
  selector: 'app-eliminar-entrenador',
  templateUrl: './eliminar-entrenador.component.html',
  styleUrls: ['./eliminar-entrenador.component.css']
})
export class EliminarEntrenadorComponent implements OnInit {

  myForm: FormGroup;
  cedulasEntrenador: any[] = [];

  constructor(private formB: FormBuilder,
              private entrenadorService: EntrenadorDataService) { }

  ngOnInit() {
    this.consultarCedulasentrenador();
    this.crearformulario();
  }

  consultarCedulasentrenador() {
    this.entrenadorService.getCedulas().subscribe( (resp: any) => {
      this.cedulasEntrenador = resp;
    });
  }

  crearformulario() {
    this.myForm = this.formB.group({
      cedula_entrenador: [, Validators.required],
    });
  }

  eliminarEntrenador() {

    if (this.myForm.controls.cedula_entrenador.value) {
      const data = {
        cedula_entrenador : this.myForm.controls.cedula_entrenador.value
      };

      this.entrenadorService.eliminarEntrenador(data);
      alert('Entrenador eliminado');
      this.ngOnInit();
    } else {
      alert('No se ha escogido entrenador');
    }
  }
}
