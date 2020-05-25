import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntrenadorHomeComponent } from './entrenador-home/entrenador-home.component';

const routes: Routes = [
  { path: 'home', component: EntrenadorHomeComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntrenadorRoutingModule { }
