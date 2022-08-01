import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';

import { PistasRoutingModule } from './pistas-routing.module';
import { VerPistasComponent } from './pages/ver-pistas/ver-pistas.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [VerPistasComponent],
  providers: [DatePipe],
  imports: [CommonModule, PistasRoutingModule, SharedModule, FormsModule],
})
export class PistasModule {}
