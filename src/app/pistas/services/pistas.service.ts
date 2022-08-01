import { Observable } from 'rxjs';
import { PistasHttpService } from './pistas-http.service';
import { Injectable } from '@angular/core';
import { pistaModel } from '../models/pistasModel';

@Injectable({
  providedIn: 'root',
})
export class PistasService {
  constructor(private PistasHttpService: PistasHttpService) {}

  getPistas(): Observable<pistaModel[]> {
    return this.PistasHttpService.getPistas();
  }
}
