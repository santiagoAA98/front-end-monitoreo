import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Administrador } from 'src/app/core/models/administrador.model';
import { AdministradorDataService } from 'src/app/core/services/administrador-data.service';

@Component({
  selector: 'app-editar-administrador',
  templateUrl: './editar-administrador.component.html',
  styleUrls: ['./editar-administrador.component.css']
})
export class EditarAdministradorComponent implements OnInit {

  @Input()
  administrador: Administrador;

  myForm: FormGroup;

  constructor(private formB: FormBuilder,
              private administradorService: AdministradorDataService) { }

  ngOnInit() {
    this.crearFormulario();
  }

  crearFormulario() {
    this.myForm = this.formB.group({
      nombre: [this.administrador.nombre, Validators.required],
      apellidos: [this.administrador.apellidos, Validators.required],
      telefono: [this.administrador.telefono, Validators.required],
      correo: [this.administrador.correo, Validators.required]
    });
  }

  actualizarDatosAdmin() {
    const data = {
      cedula: this.administrador.cedula,
      nombre: this.myForm.controls.nombre.value,
      apellidos: this.myForm.controls.apellidos.value,
      telefono: this.myForm.controls.telefono.value,
      correo: this.myForm.controls.correo.value
    };

    this.administradorService.actualizarInfoAdministrador(data);
    alert('El administrador se actualizo con éxito');
  }
}
