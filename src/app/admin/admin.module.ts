import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { PistasComponent } from './pages/pistas/pistas.component';
import { PartidosComponent } from './pages/partidos/partidos.component';
import { FormsModule } from '@angular/forms';
import { PistasEditarComponent } from './pages/pistas-editar/pistas-editar.component';
import { PistasCrearComponent } from './pages/pistas-crear/pistas-crear.component';
import { RolesComponent } from './pages/roles/roles.component';

@NgModule({
  declarations: [
    MenuComponent,
    HomeComponent,
    UsuariosComponent,
    PistasComponent,
    PartidosComponent,
    PistasEditarComponent,
    PistasCrearComponent,
    RolesComponent,
  ],
  imports: [CommonModule, AdminRoutingModule, SharedModule, FormsModule],
})
export class AdminModule {}
