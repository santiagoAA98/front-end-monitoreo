import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformeGeneralComponent } from './informe-general/informe-general.component';
import { InformeAtletaComponent } from './informe-atleta/informe-atleta.component';
import { InformeEntrenadorComponent } from './informe-entrenador/informe-entrenador.component';

@NgModule({
  declarations: [
    InformeGeneralComponent,
    InformeAtletaComponent,
    InformeEntrenadorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InformeGeneralComponent,
    InformeAtletaComponent,
    InformeEntrenadorComponent
  ]
})
export class InformesModule { }
