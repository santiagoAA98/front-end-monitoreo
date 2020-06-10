import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { Atleta } from 'src/app/core/models/atleta.model';
import { AtletaDataService } from 'src/app/core/services/atleta-data.service';
import { EventoService } from 'src/app/core/services/evento.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-entrenador-evento',
  templateUrl: './entrenador-evento.component.html',
  styleUrls: ['./entrenador-evento.component.css']
})
export class EntrenadorEventoComponent implements OnInit {

  myform: FormGroup;
  cedulaEntrenador: number;
  nombreEntrenador: string;
  atletas: Atleta[] = [];
  atletasSeleccionados: Atleta[] = [];
  tipoVista = 'crearEvento';

  constructor(private auth: AuthService,
              private actuvatedRoute: ActivatedRoute,
              private atletaService: AtletaDataService,
              private eventoService: EventoService,
              private formB: FormBuilder) { }

  ngOnInit() {
    this.cargarDatos();
    this.crearFormulario();
  }

  crearFormulario() {
    this.myform = this.formB.group({
      lugar: ['', Validators.required],
      requisitos: ['', Validators.required],
      fecha: ['', Validators.required],
      hora: ['', Validators.required]
    });
  }

  cargarDatos() {
    this.actuvatedRoute.params.subscribe( params => {
      this.cedulaEntrenador = params.cedulaEntrenador;
      this.nombreEntrenador = params.nombreEntrenador;
      this.obtenerMisAtletas();
    });
  }

  obtenerMisAtletas() {
    this.atletaService.getAtletasEntrenador(this.cedulaEntrenador).subscribe( (resp: any) => {
      for (const iterador of resp) {
        const atleta = new Atleta(iterador);
        this.atletas.push(atleta);
      }
    });
  }

  obtenerAtletasSeleccionados(cedulasAtletas: any) {
    this.atletasSeleccionados = cedulasAtletas;
  }

  crearEvento() {
    if (this.myform.valid) {
      const data = {
        lugar: this.myform.value.lugar,
        requisitos: this.myform.value.requisitos,
        fecha: this.myform.value.fecha,
        hora: this.myform.value.hora,
        cedulaEntrenador: this.cedulaEntrenador,
        atletas: [...this.atletasSeleccionados]
      };

      this.eventoService.crearEvento(data);
      alert('Evento creado con exito');
      window.location.reload();
    } else {
      alert('Completa todo el formulario');
    }
  }

  resetearDatosEvento() {
    this.myform.reset();
  }

  cerrarSesion() {
    this.auth.cerrarSesion();
  }

}
