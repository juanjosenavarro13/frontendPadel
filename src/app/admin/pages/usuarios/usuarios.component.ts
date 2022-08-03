import { usuarioModel } from 'src/app/auth/models/authModel';
import { themeModel } from './../../../shared/models/themeModel';
import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/shared/services/theme.service';
import { usuarioPaginateModel } from '../../models/usuarioModel';
import { UsuariosService } from '../../services/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
})
export class UsuariosComponent implements OnInit {
  usuarios: usuarioPaginateModel = {} as usuarioPaginateModel;
  themeActual: themeModel = {} as themeModel;
  usuariosSearch: usuarioModel[] = [];
  loading: boolean = false;
  constructor(private usuarioService: UsuariosService, private themeservice: ThemeService, private router: Router) {}

  ngOnInit(): void {
    this.getUsuarios();
    this.getTheme();
    this.searchUsuarios();
  }

  private getUsuarios() {
    this.usuarioService.getUsuarios().subscribe(data => {
      this.usuarios = data;
      this.loading = true;
    });
  }

  getTheme() {
    this.themeActual = this.themeservice.getThemeActual();
    this.themeservice.themeActual$.subscribe(data => {
      this.themeActual = data;
    });
  }
  changePage(accion: string) {
    this.loading = false;
    if (accion === 'siguiente') {
      this.usuarioService.getUsuariosPaginate(this.usuarios.next_page_url).subscribe(data => {
        this.usuarios = data;
        this.loading = true;
      });
    } else if (accion === 'anterior') {
      this.usuarioService.getUsuariosPaginate(this.usuarios.prev_page_url).subscribe(data => {
        this.usuarios = data;
        this.loading = true;
      });
    } else if (accion === 'primera') {
      this.usuarioService.getUsuariosPaginate(this.usuarios.first_page_url).subscribe(data => {
        this.usuarios = data;
        this.loading = true;
      });
    } else if (accion === 'ultima') {
      this.usuarioService.getUsuariosPaginate(this.usuarios.last_page_url).subscribe(data => {
        this.usuarios = data;
        this.loading = true;
      });
    }
  }

  private searchUsuarios() {
    this.usuarioService.searchUsuarios().subscribe(data => {
      this.usuariosSearch = data;
    });
  }
  buscarUsuario(user: number) {
    this.router.navigate(['/perfil/' + user]);
  }
}
