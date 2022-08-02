import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
})
export class UsuariosComponent implements OnInit {
  constructor(private usuarioService: UsuariosService) {}

  ngOnInit(): void {
    this.getUsuarios();
  }

  private getUsuarios() {
    this.usuarioService.getUsuarios().subscribe(data => {
      console.log(data);
    });
  }
}
