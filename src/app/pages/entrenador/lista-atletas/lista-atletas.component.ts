import { Component, OnInit, Input } from '@angular/core';
import { Atleta } from 'src/app/core/models/atleta.model';

@Component({
  selector: 'app-lista-atletas',
  templateUrl: './lista-atletas.component.html',
  styleUrls: ['./lista-atletas.component.css']
})
export class ListaAtletasComponent implements OnInit {

  @Input()
  atletas: Atleta[] = [];

  constructor() { }

  ngOnInit() {
  }

}
