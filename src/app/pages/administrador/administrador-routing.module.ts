import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdministradorHomeComponent } from './administrador-home/administrador-home.component';

const routes: Routes = [
  { path: 'home', component: AdministradorHomeComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministradorRoutingModule { }
