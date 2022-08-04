import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { PerfilHttpService } from './perfil-http.service';
import { usuarioModel, usuarioUpdateModel } from 'src/app/auth/models/authModel';

@Injectable({
  providedIn: 'root',
})
export class PerfilService {
  constructor(private perfilService: PerfilHttpService) {}

  getPerfil(id: number): Observable<usuarioModel> {
    return this.perfilService.getPerfil(id);
  }

  updatePerfil(user: any) {
    return this.perfilService.updatePerfil(user);
  }
}
