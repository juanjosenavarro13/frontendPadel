import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthModel, LoginModel, registerModelSend, rolModel, TokenModel, usuarioModel } from '../models/authModel';

@Injectable({
  providedIn: 'root',
})
export class AuthHttpService {
  constructor(private _http: HttpClient) {}

  login(user: LoginModel): Observable<AuthModel> {
    return this._http.post<AuthModel>(environment.apiUrl + 'auth/login', user);
  }

  register(user: registerModelSend): Observable<AuthModel> {
    return this._http.post<AuthModel>(environment.apiUrl + 'auth/register', user);
  }

  logout(token: TokenModel) {
    let bearer = `Bearer ${token.access_token}`;
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: bearer,
    });
    return this._http.post(environment.apiUrl + 'auth/logout', {}, { headers: headers });
  }

  me(token: TokenModel): Observable<usuarioModel> {
    let bearer = `Bearer ${token.access_token}`;
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: bearer,
    });
    return this._http.post<usuarioModel>(environment.apiUrl + 'auth/me', {}, { headers: headers });
  }

  getRol(id: number): Observable<rolModel> {
    return this._http.get<rolModel>(environment.apiUrl + 'rol/getRolById/' + id);
  }
}
