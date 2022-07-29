import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthModel, LoginModel, RegisterModel } from '../models/authModel';

@Injectable({
  providedIn: 'root'
})
export class AuthHttpService {

  constructor(private _http: HttpClient) { }

  login(user:LoginModel): Observable<AuthModel>{
    return this._http.post<AuthModel>(environment.apiUrl + 'auth/login' , user);
  }

  register(user:RegisterModel): Observable<AuthModel>{
    return this._http.post<AuthModel>(environment.apiUrl + 'auth/register' , user);
  }

}
