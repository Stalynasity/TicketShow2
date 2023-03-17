import { TestBed } from '@angular/core/testing';

import { ClienteFacturaService } from './cliente-factura.service';

describe('ClienteFacturaService', () => {
  let service: ClienteFacturaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClienteFacturaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
