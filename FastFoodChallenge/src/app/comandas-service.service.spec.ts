import { TestBed } from '@angular/core/testing';

import { ComandasServiceService } from './comandas-service.service';

describe('ComandasServiceService', () => {
  let service: ComandasServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComandasServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
