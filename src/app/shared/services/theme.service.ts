import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ThemeHttpService } from './theme-http.service';
import { themeModel } from '../models/themeModel';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private themeActual = new BehaviorSubject<themeModel>({} as themeModel);
  themeActual$ = this.themeActual.asObservable();

  constructor(private themeService: ThemeHttpService) {
    this.getThemes().subscribe(data => {
      if (localStorage.getItem('themeActual') == null) {
        this.themeActual.next(data[0]);
      } else {
        this.themeActual.next(JSON.parse(localStorage.getItem('themeActual')!));
      }
    });
  }

  setThemeActual(theme: themeModel) {
    localStorage.setItem('themeActual', JSON.stringify(theme));
    this.themeActual.next(theme);
  }

  getThemes(): Observable<themeModel[]> {
    return this.themeService.getThemes();
  }

  getThemeActual() {
    return this.themeActual.value;
  }
}
