import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { themeModel } from '../../models/themeModel';
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
  constructor(private themeService: ThemeService, private authService: AuthService, private router: Router) {
    this.themes = [];
    this.themeSelect = this.themeService.getThemeActual().id;
  }

  ngOnInit(): void {
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
}