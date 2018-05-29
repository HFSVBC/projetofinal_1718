import { TestBed, inject } from '@angular/core/testing';

import { ResponseStatusValidatorService } from './response-status-validator.service';

describe('ResponseStatusValidatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResponseStatusValidatorService]
    });
  });

  it('should be created', inject([ResponseStatusValidatorService], (service: ResponseStatusValidatorService) => {
    expect(service).toBeTruthy();
  }));
});
