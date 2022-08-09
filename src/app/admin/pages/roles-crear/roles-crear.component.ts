import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RolesService } from '../../services/roles.service';

@Component({
  selector: 'app-roles-crear',
  templateUrl: './roles-crear.component.html',
  styleUrls: ['./roles-crear.component.scss'],
})
export class RolesCrearComponent implements OnInit {
  constructor(private roleService: RolesService, private router: Router) {}

  ngOnInit(): void {}

  createRole(form: any) {
    this.roleService.createRole(form).subscribe(data => {
      this.router.navigate(['/admin/roles']);
    });
  }
}
