import { TestBed, inject } from '@angular/core/testing';

import { TintriService } from './tintri.service';

describe('TintriService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TintriService]
    });
  });

  it('should be created', inject([TintriService], (service: TintriService) => {
    expect(service).toBeTruthy();
  }));
});
