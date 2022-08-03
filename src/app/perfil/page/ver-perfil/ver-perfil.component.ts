import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ver-perfil',
  templateUrl: './ver-perfil.component.html',
  styleUrls: ['./ver-perfil.component.scss'],
})
export class VerPerfilComponent implements OnInit {
  id: number;
  constructor(private rutaActiva: ActivatedRoute) {
    this.id = this.rutaActiva.snapshot.params['id'];
  }

  ngOnInit(): void {}
}
