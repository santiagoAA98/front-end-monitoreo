import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtletaRoutingModule } from './atleta-routing.module';
import { AtletaHomeComponent } from './atleta-home/atleta-home.component';


@NgModule({
  declarations: [AtletaHomeComponent],
  imports: [
    CommonModule,
    AtletaRoutingModule
  ]
})
export class AtletaModule { }
