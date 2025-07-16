import { TestBed } from '@angular/core/testing';

import { Carros } from './carros';

describe('Carros', () => {
  let service: Carros;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Carros);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
