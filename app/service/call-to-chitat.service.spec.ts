import { TestBed } from '@angular/core/testing';

import { CallToChitatService } from './call-to-chitat.service';

describe('CallToChitatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CallToChitatService = TestBed.get(CallToChitatService);
    expect(service).toBeTruthy();
  });
});
