import { partidoModel, pistaModel } from './../models/pistasModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PistasHttpService {
  constructor(private _http: HttpClient) {}

  getPistas(): Observable<pistaModel[]> {
    return this._http.get<pistaModel[]>(environment.apiUrl + 'pistas/getPistas');
  }

  getPartidos(fecha: string = '2022-08-01'): Observable<partidoModel[]> {
    return this._http.get<partidoModel[]>(environment.apiUrl + 'partidos/byDate/' + fecha);
  }
}
