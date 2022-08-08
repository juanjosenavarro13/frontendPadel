import { Observable } from 'rxjs';
import { RolesHttpService } from './roles-http.service';
import { Injectable } from '@angular/core';
import { rolModel } from '../models/rolesModel';

@Injectable({
  providedIn: 'root',
})
export class RolesService {
  constructor(private rolService: RolesHttpService) {}

  getRoles(): Observable<rolModel[]> {
    return this.rolService.getRoles();
  }
  delete(id: number): Observable<any> {
    return this.rolService.delete(id);
  }

  getRolById(id: number): Observable<rolModel> {
    return this.rolService.getRolById(id);
  }

  edit(rol: rolModel): Observable<any> {
    return this.rolService.edit(rol);
  }
  createRole(rol: rolModel): Observable<any> {
    return this.rolService.createRole(rol);
  }
}
