import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { FormulariosModule } from 'src/app/shared/formularios/formularios.module';
import { GraficasModule } from 'src/app/shared/graficas/graficas.module';
import { InformesModule } from 'src/app/shared/informes/informes.module';

import { EntrenadorRoutingModule } from './entrenador-routing.module';
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
    FormulariosModule,
    ReactiveFormsModule,
    FormsModule,
    GraficasModule,
    InformesModule
  ]
})
export class EntrenadorModule { }
