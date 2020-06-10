import { Component, OnInit, Input } from '@angular/core';
import { EventoService } from 'src/app/core/services/evento.service';
import { Evento } from 'src/app/core/models/evento.model';
import { FormGroup, NgForm, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-registrar-marca',
  templateUrl: './registrar-marca.component.html',
  styleUrls: ['./registrar-marca.component.css']
})
export class RegistrarMarcaComponent implements OnInit {

  @Input()
  cedulaAtleta: any;

  myForm: FormGroup;
  eventos: Evento[] = [];
  eventoSeleccionado: any;
  ResultadoObtenido: number;

  constructor(private formB: FormBuilder,
              private eventoService: EventoService) { }

  ngOnInit() {
    this.obtenerEventos();
    this.crearformulario();
  }

  crearformulario() {
    this.myForm = this.formB.group({
      idEvento: []
    });
  }

  obtenerEventos() {
    const data = {
      cedulaAtleta: this.cedulaAtleta
    };

    this.eventoService.consultarEventosDisponibles(data).subscribe( (resp: any) => {
      this.eventos.push(...resp);
    });
  }

  seleccionarEvento() {
    this.eventos.forEach( evento => {
      if (evento.idEvento === this.myForm.value.idEvento) {
        this.eventoSeleccionado = evento;
      }
    });
  }


  registrarMarca(formResultado: NgForm) {
    if (formResultado.valid) {
      const data = {
        idEvento: this.eventoSeleccionado.idEvento,
        cedulaAtleta: this.eventoSeleccionado.cedulaAtleta,
        marca: formResultado.value.marca
      };

      this.eventoService.agregarResultado(data);
      alert('Marca registrada');
      window.location.reload();
    } else {
      alert('No se ha registrado el resultado');
    }
  }
}
