import { TestBed, inject } from '@angular/core/testing';

import { APIConnectorService } from './apiconnector.service';

describe('ApiconnectorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [APIConnectorService]
    });
  });

  it('should be created', inject([APIConnectorService], (service: APIConnectorService) => {
    expect(service).toBeTruthy();
  }));
});
