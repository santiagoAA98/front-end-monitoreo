import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-informe-atleta',
  templateUrl: './informe-atleta.component.html',
  styleUrls: ['./informe-atleta.component.css']
})
export class InformeAtletaComponent implements OnInit {

  @Input()
  informe: any;

  @Input()
  nombreAtleta: string;

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
