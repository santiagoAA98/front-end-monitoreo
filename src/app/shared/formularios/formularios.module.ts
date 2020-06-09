import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { EditarAdministradorComponent } from 'src/app/shared/formularios/editar-administrador/editar-administrador.component';
import { CrearAtletaComponent } from './crear-atleta/crear-atleta.component';
import { CrearEntrenadorComponent } from './crear-entrenador/crear-entrenador.component';
import { EliminarAtletaComponent } from './eliminar-atleta/eliminar-atleta.component';
import { EliminarEntrenadorComponent } from './eliminar-entrenador/eliminar-entrenador.component';
import { EditarAtletaComponent } from './editar-atleta/editar-atleta.component';
import { EditarEntrenadorComponent } from './editar-entrenador/editar-entrenador.component';
import { RegistrarMarcaComponent } from './registrar-marca/registrar-marca.component';



@NgModule({
  declarations: [
    EditarAdministradorComponent,
    CrearAtletaComponent,
    CrearEntrenadorComponent,
    EliminarAtletaComponent,
    EliminarEntrenadorComponent,
    EditarAtletaComponent,
    EditarEntrenadorComponent,
    RegistrarMarcaComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    EditarAdministradorComponent,
    CrearAtletaComponent,
    CrearEntrenadorComponent,
    EliminarAtletaComponent,
    EliminarEntrenadorComponent,
    EditarAtletaComponent,
    EditarEntrenadorComponent,
    RegistrarMarcaComponent
  ]
})
export class FormulariosModule { }
