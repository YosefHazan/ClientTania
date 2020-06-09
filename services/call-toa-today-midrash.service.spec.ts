import { TestBed } from '@angular/core/testing';

import { CallToTodayMidrashService } from './call-to-today-midrash.service';

describe('CallToaTodayMidrashService', () => {
  let service: CallToTodayMidrashService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CallToTodayMidrashService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
