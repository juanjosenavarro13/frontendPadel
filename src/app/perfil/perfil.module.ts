import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilRoutingModule } from './perfil-routing.module';
import { VerPerfilComponent } from './page/ver-perfil/ver-perfil.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [VerPerfilComponent],
  imports: [CommonModule, PerfilRoutingModule, SharedModule, FormsModule],
})
export class PerfilModule {}
