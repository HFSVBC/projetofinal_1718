import { TestBed, inject } from '@angular/core/testing';

import { LoggedInUsersService } from './logged-in-users.service';

describe('LoggedInUsersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoggedInUsersService]
    });
  });

  it('should be created', inject([LoggedInUsersService], (service: LoggedInUsersService) => {
    expect(service).toBeTruthy();
  }));
});
