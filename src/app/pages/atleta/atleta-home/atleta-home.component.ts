import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atleta-home',
  templateUrl: './atleta-home.component.html',
  styleUrls: ['./atleta-home.component.css']
})
export class AtletaHomeComponent implements OnInit {

  name = 'LEO';
  age = '19 AÑOS';
  telefono = '33333444';

  constructor() { }

  ngOnInit() {
  }

}
