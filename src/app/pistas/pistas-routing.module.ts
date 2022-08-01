import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerPistasComponent } from './pages/ver-pistas/ver-pistas.component';

const routes: Routes = [
  { path: '', component: VerPistasComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PistasRoutingModule {}
