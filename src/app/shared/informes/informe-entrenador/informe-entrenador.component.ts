import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-informe-entrenador',
  templateUrl: './informe-entrenador.component.html',
  styleUrls: ['./informe-entrenador.component.css']
})
export class InformeEntrenadorComponent implements OnInit {

  @Input()
  informe: any;

  @Input()
  nombreEntrenador: string;

  hoy: string;
  fechaActual: Date;
  nombreMeses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
    'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
  ];


  constructor() { }

  ngOnInit() {
    this.fechaActual = new Date();
    this.configurarFechaActual();
  }

  configurarFechaActual() {
    this.hoy = `${this.fechaActual.getDate()} de ${this.nombreMeses[this.fechaActual.getMonth()]} de ${this.fechaActual.getFullYear()}`;
  }

}
