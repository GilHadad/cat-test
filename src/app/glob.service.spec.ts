import { TestBed, inject } from '@angular/core/testing';

import { GlobService } from './glob.service';

describe('GlobService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GlobService]
    });
  });

  it('should be created', inject([GlobService], (service: GlobService) => {
    expect(service).toBeTruthy();
  }));
});
