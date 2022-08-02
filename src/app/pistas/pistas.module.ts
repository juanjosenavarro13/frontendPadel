import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';

import { PistasRoutingModule } from './pistas-routing.module';
import { VerPistasComponent } from './pages/ver-pistas/ver-pistas.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { VerPartidosSemanaComponent } from './pages/ver-partidos-semana/ver-partidos-semana.component';

@NgModule({
  declarations: [VerPistasComponent, VerPartidosSemanaComponent],
  providers: [DatePipe],
  imports: [CommonModule, PistasRoutingModule, SharedModule, FormsModule],
  exports: [VerPartidosSemanaComponent],
})
export class PistasModule {}
