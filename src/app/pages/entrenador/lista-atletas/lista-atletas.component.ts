import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Atleta } from 'src/app/core/models/atleta.model';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-lista-atletas',
  templateUrl: './lista-atletas.component.html',
  styleUrls: ['./lista-atletas.component.css']
})
export class ListaAtletasComponent implements OnInit {

  @Input()
  atletas: Atleta[] = [];

  @Output()
  cedulaAtletaSelected: EventEmitter<any>;

  checkList: boolean[] = [];

  constructor() {
    this.cedulaAtletaSelected = new EventEmitter();
    this.cedulaAtletaSelected.emit('');
  }

  ngOnInit() {
    setTimeout(() => {
      this.chekedList();
    }, 1500);

  }

  checkSelected(e: any, i: number) {
      if (e.target.checked) {
        this.checkList.forEach( (value, index) => {
              if (index !== i) {
                this.checkList[index] = false;
              }
        });

        this.cedulaAtletaSelected.emit(e.target.value);
      } else {
        this.cedulaAtletaSelected.emit('');
      }
  }

  chekedList() {
    for (const iterator of this.atletas) {
        this.checkList.push(false);
    }
  }

}
