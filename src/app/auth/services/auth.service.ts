import { Router } from '@angular/router';
import {
  AuthModel,
  LoginModel,
  RegisterModel,
  registerModelSend,
  rolModel,
  TokenModel,
  usuarioModel,
  usuarioUpdateModel,
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

  constructor(private _http: AuthHttpService, private router: Router) {
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
        registerModel.calle?.trim() +
        ', ' +
        registerModel.numero?.trim() +
        ', ' +
        registerModel.ciudad?.trim() +
        ', ' +
        registerModel.codigo_postal?.trim(),
      telefono: registerModel.telefono,
    };
  }

  transformUpdateUserModel(user: usuarioUpdateModel) {
    return {
      id: user.id,
      activo: user.activo,
      email: user.email,
      nombre: user.nombre,
      apellidos: user.apellidos,
      fecha_nacimiento: user.fecha_nacimiento,
      direccion:
        user.calle?.trim() +
        ', ' +
        user.numero?.trim() +
        ', ' +
        user.ciudad?.trim() +
        ', ' +
        user.codigo_postal?.trim(),
      telefono: user.telefono,
    };
  }

  register(user: RegisterModel): Observable<AuthModel> {
    let usuario = this.transformRegisterModel(user);
    return this._http.register(usuario);
  }

  me() {
    this._http.me(this.token.value).subscribe(
      data => {
        this.usuario.next(data);
        this.getRolHttp(data.rol_id);
        if (data.activo == 0) {
          this.removeToken();
          this.logout();
        }
      },
      error => {
        this.logout();
        this.removeToken();
        this.router.navigate(['/auth']);
      }
    );
  }

  getUsuario() {
    return this.usuario.value;
  }

  private getRolHttp(id: number) {
    if (id !== null) {
      this._http.getRol(id).subscribe(data => {
        this.rol.next(data);
      });
    } else {
      this.rol.next({ id: 0, nombre: 'Sin rol' } as rolModel);
    }
  }

  getRol() {
    return this.rol.value;
  }
}
