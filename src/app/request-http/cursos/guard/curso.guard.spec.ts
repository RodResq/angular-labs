import { TestBed } from '@angular/core/testing';

import { CursoGuardResolve } from './curso-guard.resolve';

describe('CursoGuard', () => {
  let guard: CursoGuardResolve;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CursoGuardResolve);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
