import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { rolModel } from '../models/rolesModel';

@Injectable({
  providedIn: 'root',
})
export class RolesHttpService {
  constructor(private http: HttpClient) {}

  getRoles(): Observable<rolModel[]> {
    return this.http.get<rolModel[]>(environment.apiUrl + 'rol/getRoles');
  }

  delete(id: number): Observable<any> {
    return this.http.delete(environment.apiUrl + 'rol/delete/' + id);
  }

  getRolById(id: number): Observable<rolModel> {
    return this.http.get<rolModel>(environment.apiUrl + 'rol/getRolById/' + id);
  }

  edit(rol: rolModel): Observable<any> {
    return this.http.put(environment.apiUrl + 'rol/edit', rol);
  }

  createRole(rol: rolModel): Observable<any> {
    return this.http.post(environment.apiUrl + 'rol/createRole', rol);
  }
}
