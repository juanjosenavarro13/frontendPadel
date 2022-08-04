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
}
