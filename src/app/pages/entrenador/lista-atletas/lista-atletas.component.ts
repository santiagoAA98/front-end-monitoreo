import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-atletas',
  templateUrl: './lista-atletas.component.html',
  styleUrls: ['./lista-atletas.component.css']
})
export class ListaAtletasComponent implements OnInit {

  items = ['apple', 'orange'];

  constructor() { }

  ngOnInit() {
  }

}
