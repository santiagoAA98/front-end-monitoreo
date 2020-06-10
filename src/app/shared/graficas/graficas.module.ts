import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';

import { RendimientoAtletaComponent } from './rendimiento-atleta/rendimiento-atleta.component';


@NgModule({
  declarations: [ RendimientoAtletaComponent ],
  imports: [
    CommonModule,
    ChartsModule
  ],
  exports: [
    RendimientoAtletaComponent
  ]
})
export class GraficasModule { }
