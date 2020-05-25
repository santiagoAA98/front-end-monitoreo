import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntrenadorRoutingModule } from './entrenador-routing.module';
import { EntrenadorHomeComponent } from './entrenador-home/entrenador-home.component';


@NgModule({
  declarations: [EntrenadorHomeComponent],
  imports: [
    CommonModule,
    EntrenadorRoutingModule
  ]
})
export class EntrenadorModule { }
