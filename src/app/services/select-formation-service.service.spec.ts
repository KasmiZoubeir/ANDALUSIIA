import { TestBed } from '@angular/core/testing';

import { SelectFormationServiceService } from './select-formation-service.service';

describe('SelectFormationServiceService', () => {
  let service: SelectFormationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectFormationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
