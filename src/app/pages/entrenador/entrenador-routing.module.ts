import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntrenadorHomeComponent } from './entrenador-home/entrenador-home.component';
import { EntrenadorEventoComponent } from './entrenador-evento/entrenador-evento.component';
import { ObservarAtletaComponent } from './observar-atleta/observar-atleta.component';

const routes: Routes = [
  { path: 'home', component: EntrenadorHomeComponent },
  { path: 'observar-atleta',  component: ObservarAtletaComponent },
  { path: 'crear-evento/:cedulaEntrenador/:nombreEntrenador', component: EntrenadorEventoComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntrenadorRoutingModule { }
