import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormulariosModule } from 'src/app/shared/formularios/formularios.module';
import { InformesModule } from 'src/app/shared/informes/informes.module';

import { AdministradorRoutingModule } from './administrador-routing.module';
import { AdministradorHomeComponent } from './administrador-home/administrador-home.component';

@NgModule({
  declarations: [
    AdministradorHomeComponent
  ],
  imports: [
    CommonModule,
    AdministradorRoutingModule,
    FormulariosModule,
    InformesModule
  ]
})
export class AdministradorModule { }
