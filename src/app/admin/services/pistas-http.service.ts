import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pistaModel } from '../models/pistasModel';

@Injectable({
  providedIn: 'root',
})
export class PistasHttpService {
  constructor(private http: HttpClient) {}

  getPistas(): Observable<pistaModel[]> {
    return this.http.get<pistaModel[]>(environment.apiUrl + 'pistas/getPistas');
  }

  getPistaById(id: number): Observable<pistaModel> {
    return this.http.get<pistaModel>(environment.apiUrl + 'pistas/getPistaById/' + id);
  }
}
