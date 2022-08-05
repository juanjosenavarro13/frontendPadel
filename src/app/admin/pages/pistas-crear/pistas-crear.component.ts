import { Router } from '@angular/router';
import { PistasService } from './../../services/pistas.service';
import { pistaModel } from './../../../pistas/models/pistasModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pistas-crear',
  templateUrl: './pistas-crear.component.html',
  styleUrls: ['./pistas-crear.component.scss'],
})
export class PistasCrearComponent implements OnInit {
  constructor(private PistasService: PistasService, private router: Router) {}

  ngOnInit(): void {}

  createPista(form: any) {
    this.PistasService.createPista(form).subscribe(
      data => {
        this.router.navigate(['/admin/pistas']);
      },
      error => {
        this.router.navigate(['/admin/pistas']);
      }
    );
  }
}
