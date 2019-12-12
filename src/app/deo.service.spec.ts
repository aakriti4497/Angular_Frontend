import { TestBed } from '@angular/core/testing';

import { DeoService } from './deo.service';

describe('DeoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeoService = TestBed.get(DeoService);
    expect(service).toBeTruthy();
  });
});
