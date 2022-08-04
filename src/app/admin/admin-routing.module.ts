import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PartidosComponent } from './pages/partidos/partidos.component';
import { PistasEditarComponent } from './pages/pistas-editar/pistas-editar.component';
import { PistasComponent } from './pages/pistas/pistas.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'pistas', component: PistasComponent },
  { path: 'pistas/:id', component: PistasEditarComponent },
  { path: 'partidos', component: PartidosComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
