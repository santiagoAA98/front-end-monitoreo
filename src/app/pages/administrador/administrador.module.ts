import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministradorRoutingModule } from './administrador-routing.module';
import { AdministradorHomeComponent } from './administrador-home/administrador-home.component';


@NgModule({
  declarations: [
    AdministradorHomeComponent
  ],
  imports: [
    CommonModule,
    AdministradorRoutingModule
  ]
})
export class AdministradorModule { }
