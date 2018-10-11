import { TestBed, inject } from '@angular/core/testing';

import { SaveformService } from './saveform.service';

describe('SaveformService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SaveformService]
    });
  });

  it('should be created', inject([SaveformService], (service: SaveformService) => {
    expect(service).toBeTruthy();
  }));
});
