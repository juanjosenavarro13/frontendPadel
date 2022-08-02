import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { themeModel } from 'src/app/shared/models/themeModel';
import { ThemeService } from 'src/app/shared/services/theme.service';
import { partidoModel, pistaModel } from '../../models/pistasModel';
import { PistasService } from '../../services/pistas.service';

@Component({
  selector: 'app-ver-pistas',
  templateUrl: './ver-pistas.component.html',
  styleUrls: ['./ver-pistas.component.scss'],
})
export class VerPistasComponent implements OnInit {
  pistas: pistaModel[] = [];
  partidos: partidoModel[] = [];
  themeActual: themeModel = {} as themeModel;
  loading: boolean = false;
  fechaActual: string;
  loadingPartidos: boolean = false;
  constructor(private pistasService: PistasService, private themeService: ThemeService, private datePipe: DatePipe) {
    this.fechaActual = this.datePipe.transform(new Date(), 'YYY-MM-dd')!;
  }

  ngOnInit(): void {
    this.getPistas();
    this.getTheme();
    this.getPartidos(this.fechaActual);
  }

  getPistas() {
    this.pistasService.getPistas().subscribe(pistas => {
      this.pistas = pistas;
      this.loading = true;
    });
  }

  getTheme() {
    this.themeActual = this.themeService.getThemeActual();
    this.themeService.themeActual$.subscribe(theme => {
      this.themeActual = theme;
    });
  }

  getPartidos(fecha: string) {
    this.pistasService.getPartidos(fecha).subscribe(data => {
      this.partidos = data;
      this.loadingPartidos = true;
    });
  }

  changeFecha(fecha: string) {
    this.loadingPartidos = false;
    this.fechaActual = fecha;
    this.getPartidos(fecha);
  }
}
