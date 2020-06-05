import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtletaRoutingModule } from './atleta-routing.module';
import { AtletaHomeComponent } from './atleta-home/atleta-home.component';
import { FormulariosModule } from 'src/app/shared/formularios/formularios.module';


@NgModule({
  declarations: [AtletaHomeComponent],
  imports: [
    CommonModule,
    AtletaRoutingModule,
    FormulariosModule
  ]
})
export class AtletaModule { }
