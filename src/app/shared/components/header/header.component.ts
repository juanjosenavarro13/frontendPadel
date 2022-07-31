import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { configModel } from '../../models/configModel';
import { themeModel } from '../../models/themeModel';
import { ConfigurationService } from '../../services/configuration.service';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  themes: themeModel[];
  themeSelect: number;
  loading: boolean = false;
  loadingConfig: boolean = false;
  config: configModel;
  constructor(
    private themeService: ThemeService,
    private authService: AuthService,
    private router: Router,
    private configService: ConfigurationService
  ) {
    this.config = {} as configModel;
    this.themes = [];
    this.themeSelect = this.themeService.getThemeActual().id;
  }

  ngOnInit(): void {
    this.getNombreApp();
    this.getThemes();
    this.themeService.themeActual$.subscribe(data => {
      this.themeSelect = data.id;
    });
  }

  getThemes() {
    this.themeService.getThemes().subscribe(data => {
      this.themes = data;
      this.loading = true;
    });
  }

  changeTheme() {
    this.themeService.setThemeActual(this.themes[this.themeSelect - 1]);
  }

  logout() {
    this.authService.logout().subscribe(
      data => {
        this.authService.removeToken();
        this.router.navigate(['/auth']);
      },
      error => {
        this.authService.removeToken();
        this.router.navigate(['/auth']);
      }
    );
  }

  getNombreApp() {
    this.configService.config$.subscribe(data => {
      this.config = data;
      this.loadingConfig = true;
    });
  }
}
