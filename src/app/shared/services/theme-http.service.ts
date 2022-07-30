import { themeModel } from './../models/themeModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ThemeHttpService {
  constructor(private _http: HttpClient) {}

  getThemes(): Observable<themeModel[]> {
    return this._http.get<themeModel[]>(environment.apiUrl + 'themes/getThemes');
  }
}
