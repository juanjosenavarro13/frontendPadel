import { PistasService } from './../../services/pistas.service';
import { Component, OnInit } from '@angular/core';
import { partidoModel } from '../../models/pistasModel';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-ver-partidos-semana',
  templateUrl: './ver-partidos-semana.component.html',
  styleUrls: ['./ver-partidos-semana.component.scss'],
})
export class VerPartidosSemanaComponent implements OnInit {
  partidos: partidoModel[] = [];
  loading: boolean = false;
  fechaActual: string;
  constructor(private PistasService: PistasService, private datePipe: DatePipe) {
    this.fechaActual = this.datePipe.transform(new Date(), 'YYY-MM-dd')!;
  }

  ngOnInit(): void {
    this.getPartidos();
  }

  private getPartidos() {
    this.PistasService.getPartidosSemana(this.fechaActual).subscribe(data => {
      console.log(data);
      this.partidos = data;
      this.loading = true;
    });
  }
}
