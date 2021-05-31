import { TestBed } from '@angular/core/testing';

import { VerificalEmailService } from './verifical-email.service';

describe('VerificalEmailService', () => {
  let service: VerificalEmailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerificalEmailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
