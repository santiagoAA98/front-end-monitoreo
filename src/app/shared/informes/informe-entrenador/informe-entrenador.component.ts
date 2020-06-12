import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-informe-entrenador',
  templateUrl: './informe-entrenador.component.html',
  styleUrls: ['./informe-entrenador.component.css']
})
export class InformeEntrenadorComponent implements OnInit {

  @Input()
  informe: any;

  constructor() { }

  ngOnInit() {
  }

}
