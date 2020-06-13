import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-informe-general',
  templateUrl: './informe-general.component.html',
  styleUrls: ['./informe-general.component.css']
})
export class InformeGeneralComponent implements OnInit {

  @Input()
  informe: any;

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
