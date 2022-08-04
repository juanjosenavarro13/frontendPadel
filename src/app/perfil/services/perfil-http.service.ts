import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { usuarioModel, usuarioUpdateModel } from 'src/app/auth/models/authModel';

@Injectable({
  providedIn: 'root',
})
export class PerfilHttpService {
  headers: HttpHeaders;
  bearer: string;
  constructor(private http: HttpClient, private authService: AuthService) {
    this.bearer = 'Bearer ' + this.authService.getToken().access_token;
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.bearer,
    });
  }

  getPerfil(id: number): Observable<usuarioModel> {
    return this.http.get<usuarioModel>(environment.apiUrl + 'usuarios/findUser/' + id, { headers: this.headers });
  }

  updatePerfil(user: usuarioUpdateModel) {
    return this.http.put(environment.apiUrl + 'usuarios/updateUser', user, { headers: this.headers });
  }
}
