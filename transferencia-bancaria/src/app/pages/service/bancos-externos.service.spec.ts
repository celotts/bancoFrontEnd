import { TestBed } from '@angular/core/testing';

import { BancosExternosService } from './bancos-externos.service';

describe('BancosExternosService', () => {
  let service: BancosExternosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BancosExternosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
