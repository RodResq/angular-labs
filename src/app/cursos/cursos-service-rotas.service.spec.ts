import { TestBed } from '@angular/core/testing';

import { CursosServiceRotasService } from './cursos-service-rotas.service';

describe('CursosServiceRotasService', () => {
  let service: CursosServiceRotasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CursosServiceRotasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
