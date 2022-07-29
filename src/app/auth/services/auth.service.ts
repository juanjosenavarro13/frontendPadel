import { LoginModel, TokenModel } from './../models/authModel';
import { Injectable } from '@angular/core';
import { AuthHttpService } from './auth-http.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private token = new BehaviorSubject({} as TokenModel);
  token$ = this.token.asObservable();

  constructor(private _http: AuthHttpService) {
    this.token.next(this.getTokenLocalstorage());
  }

  login(user: LoginModel) {
    return this._http.login(user);
  }

  private getTokenLocalstorage() {
    let local = localStorage.getItem('token');
    if (local) {
      return JSON.parse(local);
    } else {
      return {} as TokenModel;
    }
  }

  getToken() {
    return this.token.value;
  }

  setToken(token: TokenModel) {
    localStorage.setItem('token', JSON.stringify(token));
    this.token.next(this.getTokenLocalstorage());
  }
}
