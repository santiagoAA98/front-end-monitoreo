import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtletaRoutingModule } from './atleta-routing.module';
import { AtletaHomeComponent } from './atleta-home/atleta-home.component';
import { FormulariosModule } from 'src/app/shared/formularios/formularios.module';
import { GraficasModule } from 'src/app/shared/graficas/graficas.module';
import { MiRendimientoComponent } from './mi-rendimiento/mi-rendimiento.component';


@NgModule({
  declarations: [AtletaHomeComponent, MiRendimientoComponent],
  imports: [
    CommonModule,
    AtletaRoutingModule,
    FormulariosModule,
    GraficasModule
  ]
})
export class AtletaModule { }
