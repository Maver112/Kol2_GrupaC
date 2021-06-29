import { TestBed } from '@angular/core/testing';

import { WZDataService } from './wz-data.service';

describe('WZDataService', () => {
  let service: WZDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WZDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
