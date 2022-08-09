import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { pistaModel } from 'src/app/pistas/models/pistasModel';
import { PistasHttpService } from './pistas-http.service';

@Injectable({
  providedIn: 'root',
})
export class PistasService {
  constructor(private pistaService: PistasHttpService) {}
  getPistas(): Observable<pistaModel[]> {
    return this.pistaService.getPistas();
  }

  getPistaById(id: number): Observable<pistaModel> {
    return this.pistaService.getPistaById(id);
  }

  updatePista(pista: pistaModel, id: number): Observable<pistaModel> {
    return this.pistaService.updatePista(pista, id);
  }
  deletePista(id: number): Observable<pistaModel> {
    return this.pistaService.deletePista(id);
  }
  createPista(pista: pistaModel): Observable<pistaModel> {
    return this.pistaService.createPista(pista);
  }
}
