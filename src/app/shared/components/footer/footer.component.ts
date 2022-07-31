import { ConfigurationService } from './../../services/configuration.service';
import { Component, OnInit } from '@angular/core';
import { themeModel } from '../../models/themeModel';
import { ThemeService } from '../../services/theme.service';
import { configModel } from '../../models/configModel';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  themeActual: themeModel;
  config: configModel;
  date: Date;
  loading: boolean;
  constructor(private themeService: ThemeService, private ConfigurationService: ConfigurationService) {
    this.themeActual = {} as themeModel;
    this.config = {} as configModel;
    this.date = new Date();
    this.loading = false;
  }

  ngOnInit(): void {
    this.config = this.ConfigurationService.getConfig();
    this.ConfigurationService.config$.subscribe(data => {
      this.config = data;
      this.getTheme();
    });
  }

  private getTheme() {
    this.themeActual = this.themeService.getThemeActual();
    this.themeService.themeActual$.subscribe(data => {
      this.themeActual = data;
      this.loading = true;
    });
  }
}
