import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerPerfilComponent } from './page/ver-perfil/ver-perfil.component';

const routes: Routes = [
  { path: ':id', component: VerPerfilComponent },
  { path: '**', redirectTo: '../' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilRoutingModule {}
