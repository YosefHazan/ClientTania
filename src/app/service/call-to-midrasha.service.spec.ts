import { TestBed } from '@angular/core/testing';

import { CallToMidrashaService } from './call-to-midrasha.service';

describe('CallToMidrashaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CallToMidrashaService = TestBed.get(CallToMidrashaService);
    expect(service).toBeTruthy();
  });
});
