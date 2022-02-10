import { TestBed } from '@angular/core/testing';

import { FsApiService } from './fs-api.service';

describe('FsApiService', () => {
  let service: FsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
