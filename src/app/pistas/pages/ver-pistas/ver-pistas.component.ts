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
  constructor(private pistasService: PistasService, private themeService: ThemeService) {}

  ngOnInit(): void {
    this.getPistas();
    this.getTheme();
    this.getPartidos();
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

  getPartidos() {
    this.pistasService.getPartidos().subscribe(data => {
      this.partidos = data;
    });
  }
}
