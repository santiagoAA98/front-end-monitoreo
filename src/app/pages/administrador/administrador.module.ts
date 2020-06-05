import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministradorRoutingModule } from './administrador-routing.module';
import { AdministradorHomeComponent } from './administrador-home/administrador-home.component';


import { FormulariosModule } from 'src/app/shared/formularios/formularios.module';

@NgModule({
  declarations: [
    AdministradorHomeComponent
  ],
  imports: [
    CommonModule,
    AdministradorRoutingModule,
    FormulariosModule
  ]
})
export class AdministradorModule { }
