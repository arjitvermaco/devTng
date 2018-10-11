import { TestBed, inject } from '@angular/core/testing';

import { AddLeadService } from './add-lead.service';

describe('AddLeadService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddLeadService]
    });
  });

  it('should be created', inject([AddLeadService], (service: AddLeadService) => {
    expect(service).toBeTruthy();
  }));
});
