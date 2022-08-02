import { themeModel } from './../../../shared/models/themeModel';
import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/shared/services/theme.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  themeActual: themeModel = {} as themeModel;
  loading: boolean = false;
  constructor(private themeservice: ThemeService) {}

  ngOnInit(): void {
    this.getTheme();
  }

  private getTheme() {
    this.themeActual = this.themeservice.getThemeActual();
    this.themeservice.themeActual$.subscribe(theme => {
      this.themeActual = theme;
      this.loading = true;
    });
  }
}
