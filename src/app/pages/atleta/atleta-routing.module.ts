import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AtletaHomeComponent } from './atleta-home/atleta-home.component';
import { MiRendimientoComponent } from './mi-rendimiento/mi-rendimiento.component';

const routes: Routes = [
  { path: 'home', component: AtletaHomeComponent },
  { path: 'mi-rendimiento/:cedulaAtleta',  component: MiRendimientoComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtletaRoutingModule { }
