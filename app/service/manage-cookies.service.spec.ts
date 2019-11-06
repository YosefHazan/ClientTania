import { TestBed } from '@angular/core/testing';

import { ManageCookiesService } from './manage-cookies.service';

describe('ManageCookiesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ManageCookiesService = TestBed.get(ManageCookiesService);
    expect(service).toBeTruthy();
  });
});
