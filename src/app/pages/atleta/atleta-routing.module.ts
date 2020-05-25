import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AtletaHomeComponent } from './atleta-home/atleta-home.component';

const routes: Routes = [
  { path: 'home', component: AtletaHomeComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtletaRoutingModule { }
