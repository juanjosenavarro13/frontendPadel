import { Router } from '@angular/router';
import {
  AuthModel,
  LoginModel,
  RegisterModel,
  registerModelSend,
  rolModel,
  TokenModel,
  usuarioModel,
} from './../models/authModel';
import { Injectable } from '@angular/core';
import { AuthHttpService } from './auth-http.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private token = new BehaviorSubject({} as TokenModel);
  token$ = this.token.asObservable();
  private usuario = new BehaviorSubject({} as usuarioModel);
  usuario$ = this.usuario.asObservable();
  private rol = new BehaviorSubject({} as rolModel);
  rol$ = this.rol.asObservable();

  constructor(private _http: AuthHttpService) {
    this.token.next(this.getTokenLocalstorage());
    if (this.token.value.access_token) {
      this.me();
    }
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
    this.me();
  }

  removeToken() {
    localStorage.removeItem('token');
    this.token.next(this.getTokenLocalstorage());
  }

  logout() {
    return this._http.logout(this.token.value);
  }

  private transformRegisterModel(registerModel: RegisterModel): registerModelSend {
    return {
      email: registerModel.email,
      nombre: registerModel.nombre,
      password: registerModel.password,
      password_confirmation: registerModel.password_confirmation,
      apellidos: registerModel.apellidos,
      fecha_nacimiento: registerModel.fecha_nacimiento,
      direccion:
        registerModel.calle +
        ', ' +
        registerModel.numero +
        ', ' +
        registerModel.ciudad +
        ', ' +
        registerModel.codigo_postal,
      telefono: registerModel.telefono,
    };
  }

  register(user: RegisterModel): Observable<AuthModel> {
    let usuario = this.transformRegisterModel(user);
    return this._http.register(usuario);
  }

  private me() {
    this._http.me(this.token.value).subscribe(
      data => {
        this.usuario.next(data);
        this.getRolHttp(data.rol_id);
      },
      error => {
        this.logout();
        this.removeToken();
      }
    );
  }

  getUsuario() {
    return this.usuario.value;
  }

  private getRolHttp(id: number) {
    this._http.getRol(id).subscribe(data => {
      this.rol.next(data);
    });
  }

  getRol() {
    return this.rol.value;
  }
}
