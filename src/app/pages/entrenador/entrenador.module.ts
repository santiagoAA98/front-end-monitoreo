import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntrenadorRoutingModule } from './entrenador-routing.module';

import { FormulariosModule } from 'src/app/shared/formularios/formularios.module';

import { EntrenadorHomeComponent } from './entrenador-home/entrenador-home.component';
import { EntrenadorEventoComponent } from './entrenador-evento/entrenador-evento.component';
import { ObservarAtletaComponent } from './observar-atleta/observar-atleta.component';
import { ListaAtletasComponent } from './lista-atletas/lista-atletas.component';


@NgModule({
  declarations: [
    EntrenadorHomeComponent,
    EntrenadorEventoComponent,
    ObservarAtletaComponent,
    ListaAtletasComponent
  ],
  imports: [
    CommonModule,
    EntrenadorRoutingModule,
    FormulariosModule
  ]
})
export class EntrenadorModule { }
