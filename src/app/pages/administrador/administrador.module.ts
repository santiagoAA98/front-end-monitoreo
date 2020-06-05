import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministradorRoutingModule } from './administrador-routing.module';
import { AdministradorHomeComponent } from './administrador-home/administrador-home.component';
import { FormEditarPerfilComponent } from './form-editar-perfil/form-editar-perfil.component';
import { FormCrearAtletaComponent } from './form-crear-atleta/form-crear-atleta.component';
import { FormCrearEntrenadorComponent } from './form-crear-entrenador/form-crear-entrenador.component';
import { FormEliminarEntrenadorComponent } from './form-eliminar-entrenador/form-eliminar-entrenador.component';
import { FormEliminarAtletaComponent } from './form-eliminar-atleta/form-eliminar-atleta.component';


@NgModule({
  declarations: [
    AdministradorHomeComponent,
    FormEditarPerfilComponent,
    FormCrearAtletaComponent,
    FormCrearEntrenadorComponent,
    FormEliminarEntrenadorComponent,
    FormEliminarAtletaComponent
  ],
  imports: [
    CommonModule,
    AdministradorRoutingModule
  ]
})
export class AdministradorModule { }
