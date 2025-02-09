import { TestBed } from '@angular/core/testing';

import { EstrellasService } from './estrellas.service';

describe('EstrellasService', () => {
  let service: EstrellasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstrellasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
