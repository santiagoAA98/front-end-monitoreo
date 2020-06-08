import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AtletaDataService } from 'src/app/core/services/atleta-data.service';
import { Atleta } from 'src/app/core/models/atleta.model';


@Component({
  selector: 'app-editar-atleta',
  templateUrl: './editar-atleta.component.html',
  styleUrls: ['./editar-atleta.component.css']
})
export class EditarAtletaComponent implements OnInit, OnChanges {

  @Input()
  atleta: Atleta;

  myForm: FormGroup;

  constructor(private formB: FormBuilder,
              private atletaService: AtletaDataService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.myForm) {
      this.myForm.reset(changes.atleta.currentValue);
      this.myForm.controls.talla_camisa.setValue(changes.atleta.currentValue.tallaCamisa);
      this.myForm.controls.tipo_sangre.setValue(changes.atleta.currentValue.tipoSangre);
      this.myForm.controls.lesiones_graves.setValue(changes.atleta.currentValue.lesionesGraves);
    }
  }

  ngOnInit() {
    this.crearformulario();
  }

  crearformulario() {
    this.myForm = this.formB.group({
      nombre: [this.atleta.nombre , Validators.required],
      apellidos: [this.atleta.apellidos , Validators.required],
      edad: [this.atleta.edad , Validators.required],
      telefono: [this.atleta.telefono , Validators.required],
      correo: [this.atleta.correo , Validators.required],
      estatura: [this.atleta.estatura , Validators.required],
      peso: [this.atleta.peso , Validators.required],
      talla_camisa: [this.atleta.tallaCamisa , Validators.required],
      tipo_sangre: [this.atleta.tipoSangre , Validators.required],
      alergias: [this.atleta.alergias , Validators.required],
      operaciones: [this.atleta.operaciones , Validators.required],
      lesiones_graves: [this.atleta.lesionesGraves , Validators.required],
      fracturas: [this.atleta.fracturas, Validators.required],
      sexo: [this.atleta.sexo, Validators.required],
    });
  }

  actualizarAtleta() {
    const data = {
      cedula_atleta: this.atleta.cedulaAtleta,
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
    };

    this.atletaService.actualizarAtleta(data);
  }

}
