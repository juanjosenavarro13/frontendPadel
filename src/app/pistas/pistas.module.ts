import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PistasRoutingModule } from './pistas-routing.module';
import { VerPistasComponent } from './pages/ver-pistas/ver-pistas.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [VerPistasComponent],
  imports: [CommonModule, PistasRoutingModule, SharedModule],
})
export class PistasModule {}
