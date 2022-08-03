import { TestBed } from '@angular/core/testing';

import { PerfilHttpService } from './perfil-http.service';

describe('PerfilHttpService', () => {
  let service: PerfilHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerfilHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
