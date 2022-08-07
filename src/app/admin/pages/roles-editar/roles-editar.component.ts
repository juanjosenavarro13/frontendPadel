import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { rolModel } from '../../models/rolesModel';
import { RolesService } from '../../services/roles.service';

@Component({
  selector: 'app-roles-editar',
  templateUrl: './roles-editar.component.html',
  styleUrls: ['./roles-editar.component.scss'],
})
export class RolesEditarComponent implements OnInit {
  id: number;
  loading: boolean = false;
  rol: rolModel = {} as rolModel;
  constructor(private rutaActiva: ActivatedRoute, private rolService: RolesService) {
    this.id = this.rutaActiva.snapshot.params['id'];
    this.rutaActiva.params.subscribe(params => {
      this.id = params['id'];
    });
  }

  ngOnInit(): void {
    this.getRol();
  }

  getRol() {
    this.rolService.getRolById(this.id).subscribe(data => {
      this.rol = data;
      this.loading = true;
    });
  }

  save(form: any) {
    console.log(form);
  }
}
