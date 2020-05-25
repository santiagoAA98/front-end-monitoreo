import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';


const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  {
    path: 'administrador',
    loadChildren: () => import('./pages/administrador/administrador.module').then(m => m.AdministradorModule)
  },
  {
    path: 'entrenador',
    loadChildren: () => import('./pages/entrenador/entrenador.module').then(m => m.EntrenadorModule)
  },
  {
    path: 'atleta',
    loadChildren: () => import('./pages/atleta/atleta.module').then(m => m.AtletaModule)
  },
  { path: '**', pathMatch: 'full', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
