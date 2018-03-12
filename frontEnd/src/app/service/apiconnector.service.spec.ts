import { TestBed, inject } from '@angular/core/testing';

import { ApiconnectorService } from './apiconnector.service';

describe('ApiconnectorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiconnectorService]
    });
  });

  it('should be created', inject([ApiconnectorService], (service: ApiconnectorService) => {
    expect(service).toBeTruthy();
  }));
});
