import { LoginModel } from './../models/authModel';
import { Injectable } from '@angular/core';
import { AuthHttpService } from './auth-http.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private logeado: boolean;

  constructor(private _http: AuthHttpService) {
    this.logeado = true;
  }

  getLogeado() {
    return this.logeado;
  }

  login(user: LoginModel) {
    return this._http.login(user);
  }
}
