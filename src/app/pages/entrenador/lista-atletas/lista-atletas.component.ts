import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Atleta } from 'src/app/core/models/atleta.model';
import { splitClasses } from '@angular/compiler';

@Component({
  selector: 'app-lista-atletas',
  templateUrl: './lista-atletas.component.html',
  styleUrls: ['./lista-atletas.component.css']
})
export class ListaAtletasComponent implements OnInit {

  @Input()
  atletas: Atleta[] = [];

  @Input()
  tipoVista: string;

  @Output()
  cedulaAtletaSelected: EventEmitter<any>;

  @Output()
  cedulasAtletasSelected: EventEmitter<any[]>;

  cedulasArray: any[] = [];
  checkList: boolean[] = [];

  constructor() {
    this.cedulaAtletaSelected = new EventEmitter();
    this.cedulaAtletaSelected.emit('');

    this.cedulasAtletasSelected = new EventEmitter();
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


  checkAtletasSelected(e: any) {
    if (e.target.checked) {
      this.cedulasArray.push(e.target.value);
    } else {
      for (let index = 0; index < this.cedulasArray.length; index++) {
        if (this.cedulasArray[index] === e.target.value) {
          this.cedulasArray.splice(index, 1);
          break;
        }
      }
    }

    this.cedulasAtletasSelected.emit(this.cedulasArray);
  }

  opcionesDisponibles(e: any, i: number) {
    if (this.tipoVista === 'crearEvento') {
      this.checkAtletasSelected(e);
    } else {
      this.checkSelected(e, i);
    }
  }

}
