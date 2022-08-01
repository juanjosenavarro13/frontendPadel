import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { rolModel, usuarioModel } from 'src/app/auth/models/authModel';
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
  usuario: usuarioModel;
  rol: rolModel;
  constructor(
    private themeService: ThemeService,
    private authService: AuthService,
    private router: Router,
    private configService: ConfigurationService
  ) {
    this.usuario = {} as usuarioModel;
    this.config = {} as configModel;
    this.rol = {} as rolModel;
    this.themes = [];
    this.themeSelect = this.themeService.getThemeActual().id;
  }

  ngOnInit(): void {
    this.getNombreApp();
    this.getThemes();
    this.getUsuario();
    this.getRol();
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
    this.authService.removeToken();
    this.router.navigate(['/auth/login']);
  }

  getNombreApp() {
    this.configService.config$.subscribe(data => {
      this.config = data;
      this.loadingConfig = true;
    });
  }

  getUsuario() {
    this.usuario = this.authService.getUsuario();
    this.authService.usuario$.subscribe(data => {
      this.usuario = data;
    });
  }
  getRol() {
    this.rol = this.authService.getRol();
    this.authService.rol$.subscribe(data => {
      this.rol = data;
    });
  }
}
