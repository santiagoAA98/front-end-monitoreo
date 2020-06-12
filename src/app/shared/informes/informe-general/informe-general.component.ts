import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-informe-general',
  templateUrl: './informe-general.component.html',
  styleUrls: ['./informe-general.component.css']
})
export class InformeGeneralComponent implements OnInit {

  @Input()
  informe: any;

  constructor() { }

  ngOnInit() {
  }

}
