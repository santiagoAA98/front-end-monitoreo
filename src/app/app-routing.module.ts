import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';

import { AuthGuard } from './core/guards/auth.guard';
import { LoginGuard } from './core/guards/login.guard';

const routes: Routes = [
  { path: '', canActivate: [LoginGuard], component: LoginComponent, pathMatch: 'full'},
  { path: 'login', canActivate: [LoginGuard], component: LoginComponent },
  {
    path: 'administrador',
    data: {rol: 'administrador'},
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/administrador/administrador.module').then(m => m.AdministradorModule)
  },
  {
    path: 'entrenador',
    data: {rol: 'entrenador'},
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/entrenador/entrenador.module').then(m => m.EntrenadorModule)
  },
  {
    path: 'atleta',
    data: {rol: 'atleta'},
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/atleta/atleta.module').then(m => m.AtletaModule)
  },
  { path: '**', canActivate: [LoginGuard], pathMatch: 'full', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }