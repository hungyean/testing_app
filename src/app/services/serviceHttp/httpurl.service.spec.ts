import { TestBed } from '@angular/core/testing';

import { HttpurlService } from './httpurl.service';

describe('HttpurlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpurlService = TestBed.get(HttpurlService);
    expect(service).toBeTruthy();
  });
});
