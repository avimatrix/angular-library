import { TestBed } from '@angular/core/testing';

import { IvtoolService } from './ivtool.service';

describe('IvtoolService', () => {
  let service: IvtoolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IvtoolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
