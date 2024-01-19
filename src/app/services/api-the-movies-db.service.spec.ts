import { TestBed } from '@angular/core/testing';

import { ApiTheMoviesDBService } from './api-the-movies-db.service';

describe('ApiTheMoviesDBService', () => {
  let service: ApiTheMoviesDBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiTheMoviesDBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
