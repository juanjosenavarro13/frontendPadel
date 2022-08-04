import { pistaModel } from './../../../pistas/models/pistasModel';
import { Component, OnInit } from '@angular/core';
import { PistasService } from '../../services/pistas.service';

@Component({
  selector: 'app-pistas',
  templateUrl: './pistas.component.html',
  styleUrls: ['./pistas.component.scss'],
})
export class PistasComponent implements OnInit {
  pistas: pistaModel[] = [];
  constructor(private pistasService: PistasService) {}

  ngOnInit(): void {
    this.getPistas();
  }

  private getPistas() {
    this.pistasService.getPistas().subscribe(data => {
      console.log(data);
      this.pistas = data;
    });
  }
}
