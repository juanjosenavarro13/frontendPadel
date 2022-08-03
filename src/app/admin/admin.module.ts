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

@NgModule({
  declarations: [MenuComponent, HomeComponent, UsuariosComponent, PistasComponent, PartidosComponent],
  imports: [CommonModule, AdminRoutingModule, SharedModule, FormsModule],
})
export class AdminModule {}
