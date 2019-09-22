import { TestBed } from '@angular/core/testing';

import { GetSRCService } from './get-src.service';

describe('GetSRCService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetSRCService = TestBed.get(GetSRCService);
    expect(service).toBeTruthy();
  });
});
