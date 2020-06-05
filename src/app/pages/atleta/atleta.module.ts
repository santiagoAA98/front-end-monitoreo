import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtletaRoutingModule } from './atleta-routing.module';
import { AtletaHomeComponent } from './atleta-home/atleta-home.component';
import { FormEditarPerfilComponent } from './form-editar-perfil/form-editar-perfil.component';


@NgModule({
  declarations: [AtletaHomeComponent, FormEditarPerfilComponent],
  imports: [
    CommonModule,
    AtletaRoutingModule
  ]
})
export class AtletaModule { }
