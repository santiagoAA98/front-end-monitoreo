import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-informe-atleta',
  templateUrl: './informe-atleta.component.html',
  styleUrls: ['./informe-atleta.component.css']
})
export class InformeAtletaComponent implements OnInit {

  @Input()
  informe: any;

  constructor() { }

  ngOnInit() {
  }

}
