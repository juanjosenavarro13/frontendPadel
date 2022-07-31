import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { configModel } from '../models/configModel';

@Injectable({
  providedIn: 'root',
})
export class ConfigurationHttpService {
  constructor(private _http: HttpClient) {}

  getConfiguration(): Observable<configModel> {
    return this._http.get<configModel>(environment.apiUrl + 'config/get');
  }
}
