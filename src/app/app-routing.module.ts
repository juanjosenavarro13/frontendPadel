import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerPartidosSemanaComponent } from './pistas/pages/ver-partidos-semana/ver-partidos-semana.component';
import { AuthBlockLoginGuard } from './shared/guards/auth-block-login.guard';
import { AuthGuard } from './shared/guards/auth.guard';
import { HomeComponent } from './shared/pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'pistas', loadChildren: () => import('./pistas/pistas.module').then(m => m.PistasModule) },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    canActivate: [AuthBlockLoginGuard],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
