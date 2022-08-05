import { Component, OnInit } from '@angular/core';
import { rolModel } from '../../models/rolesModel';
import { RolesService } from '../../services/roles.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss'],
})
export class RolesComponent implements OnInit {
  loading: boolean = false;
  roles: rolModel[] = [];
  constructor(private rolesService: RolesService) {}

  ngOnInit(): void {
    this.getRoles();
  }

  private getRoles() {
    this.rolesService.getRoles().subscribe(data => {
      this.roles = data;
      this.loading = true;
    });
  }
  delete(id: number) {
    if (confirm('¿Está seguro de eliminar este rol?')) {
      this.rolesService.delete(id).subscribe(data => {
        this.getRoles();
      });
    }
  }
}
