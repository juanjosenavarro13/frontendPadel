import { themeModel } from 'src/app/shared/models/themeModel';
import { ThemeService } from 'src/app/shared/services/theme.service';
import { usuarioUpdateModel, rolModel } from 'src/app/auth/models/authModel';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PerfilService } from '../../services/perfil.service';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-ver-perfil',
  templateUrl: './ver-perfil.component.html',
  styleUrls: ['./ver-perfil.component.scss'],
})
export class VerPerfilComponent implements OnInit {
  id: number;
  editMode: boolean = false;
  usuario: usuarioUpdateModel = {} as usuarioUpdateModel;
  rol: rolModel = {} as rolModel;
  themeActual: themeModel = {} as themeModel;
  idVisita: number = 0;
  roles: rolModel[] = [];
  constructor(
    private rutaActiva: ActivatedRoute,
    private perfilservice: PerfilService,
    private authservice: AuthService,
    private ThemeService: ThemeService,
    private router: Router
  ) {
    this.id = this.rutaActiva.snapshot.params['id'];
    this.rutaActiva.params.subscribe(params => {
      this.id = Number(params['id']);
      this.getUser(this.id);
    });
  }

  ngOnInit(): void {
    this.getUser(this.id);
    this.getIdVisita();
    this.getRol();
    this.getTheme();
    this.getRoles();
  }

  getUser(id: number) {
    this.perfilservice.getPerfil(id).subscribe(data => {
      this.usuario = data;
      this.usuario.calle = data.direccion?.split(',')[0] || '';
      this.usuario.numero = data.direccion?.split(',')[1] || '';
      this.usuario.ciudad = data.direccion?.split(',')[2] || '';
      this.usuario.codigo_postal = data.direccion?.split(',')[3] || '';
      if (this.usuario.email === undefined) {
        this.router.navigate(['/']);
      }
    });
  }

  getRol() {
    this.rol = this.authservice.getRol();
    this.authservice.rol$.subscribe(data => {
      this.rol = data;
    });
  }

  getTheme() {
    this.themeActual = this.ThemeService.getThemeActual();
    this.ThemeService.themeActual$.subscribe(data => {
      this.themeActual = data;
    });
  }
  changeEditMode() {
    this.editMode = !this.editMode;
  }
  save(form: usuarioUpdateModel) {
    this.changeEditMode();
    let user = this.authservice.transformUpdateUserModel(form);
    this.perfilservice.updatePerfil(user).subscribe(
      data => {
        if (this.idVisita == this.id) {
          this.authservice.me();
        }
        this.getUser(this.id);
      },
      error => {
        this.getUser(this.id);
      }
    );
  }

  getIdVisita() {
    this.idVisita = this.authservice.getUsuario().id;
    this.authservice.usuario$.subscribe(data => {
      this.idVisita = data.id;
    });
  }

  getRoles() {
    this.perfilservice.getRoles().subscribe(data => {
      this.roles = data;
    });
  }
}
