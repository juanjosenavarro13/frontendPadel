import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerPartidosSemanaComponent } from './pages/ver-partidos-semana/ver-partidos-semana.component';
import { VerPistasComponent } from './pages/ver-pistas/ver-pistas.component';

const routes: Routes = [
  { path: 'hoy', component: VerPistasComponent },
  { path: 'semana', component: VerPartidosSemanaComponent },
  { path: '**', redirectTo: 'hoy' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PistasRoutingModule {}
