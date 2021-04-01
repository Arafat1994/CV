import { TestBed } from '@angular/core/testing';

import { WidthServiceService } from './width-service.service';

describe('WidthServiceService', () => {
  let service: WidthServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WidthServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
