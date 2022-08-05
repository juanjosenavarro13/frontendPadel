import { PistasService } from './../../services/pistas.service';
import { Component, OnInit } from '@angular/core';
import { partidoModel } from '../../models/pistasModel';
import { DatePipe } from '@angular/common';
import { themeModel } from 'src/app/shared/models/themeModel';
import { ThemeService } from 'src/app/shared/services/theme.service';

@Component({
  selector: 'app-ver-partidos-semana',
  templateUrl: './ver-partidos-semana.component.html',
  styleUrls: ['./ver-partidos-semana.component.scss'],
})
export class VerPartidosSemanaComponent implements OnInit {
  partidos: partidoModel[] = [];
  loading: boolean = false;
  fechaActual: string;
  themeActual: themeModel = {} as themeModel;

  constructor(private PistasService: PistasService, private datePipe: DatePipe, private themeService: ThemeService) {
    this.fechaActual = this.datePipe.transform(new Date(), 'YYY-MM-dd')!;
  }

  ngOnInit(): void {
    this.getPartidos();
    this.getTheme();
  }

  private getPartidos() {
    this.PistasService.getPartidosSemana(this.fechaActual).subscribe(data => {
      this.partidos = data;
      this.loading = true;
    });
  }

  public getTheme() {
    this.themeActual = this.themeService.getThemeActual();
    this.themeService.themeActual$.subscribe(theme => {
      this.themeActual = theme;
    });
  }
}
