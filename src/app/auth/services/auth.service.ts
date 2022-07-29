import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private logeado: boolean;

  constructor() {
    this.logeado = false;
  }

  getLogeado() {
    return this.logeado;
  }
}
