import { pistaModel } from 'src/app/pistas/models/pistasModel';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PistasService } from '../../services/pistas.service';

@Component({
  selector: 'app-pistas-editar',
  templateUrl: './pistas-editar.component.html',
  styleUrls: ['./pistas-editar.component.scss'],
})
export class PistasEditarComponent implements OnInit {
  id: number;
  pista = {} as pistaModel;
  edit: boolean = false;
  constructor(private rutaActiva: ActivatedRoute, private pistaService: PistasService, private router: Router) {
    this.id = rutaActiva.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.getPista(this.id);
  }

  getPista(id: number) {
    this.pistaService.getPistaById(id).subscribe(
      pista => {
        this.pista = pista;
      },
      error => {
        this.router.navigate(['/admin/pistas']);
      }
    );
  }
  delete() {
    if (confirm('¿Estás seguro de que quieres borrar esta pista?')) {
      this.pistaService.deletePista(this.id).subscribe(data => {
        this.changeEditMode();
        this.getPista(this.id);
      });
    }
  }

  changeEditMode() {
    this.edit = !this.edit;
  }
  save() {
    this.pistaService.updatePista(this.pista, this.id).subscribe(data => {
      this.changeEditMode();
      this.getPista(this.id);
    });
  }
}
