import { rolModel, usuarioModel } from 'src/app/auth/models/authModel';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  usuario: usuarioModel = {} as usuarioModel;
  rol: rolModel = {} as rolModel;
  constructor(private authservice: AuthService) {}

  ngOnInit(): void {
    this.getUsuario();
  }

  private getUsuario() {
    this.usuario = this.authservice.getUsuario();
    this.authservice.usuario$.subscribe(usuario => {
      this.usuario = usuario;
    });
    this.rol = this.authservice.getRol();
    this.authservice.rol$.subscribe(rol => {
      this.rol = rol;
    });
  }
}
