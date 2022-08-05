import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PartidosComponent } from './pages/partidos/partidos.component';
import { PistasCrearComponent } from './pages/pistas-crear/pistas-crear.component';
import { PistasEditarComponent } from './pages/pistas-editar/pistas-editar.component';
import { PistasComponent } from './pages/pistas/pistas.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'pistas', component: PistasComponent },
  { path: 'pistas/editar/:id', component: PistasEditarComponent },
  { path: 'pistas/crear', component: PistasCrearComponent },
  { path: 'partidos', component: PartidosComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
