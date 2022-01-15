import { TestBed } from '@angular/core/testing';

import { NgxFloatingUiService } from './ngx-floating-ui.service';

describe('NgxFloatingUiService', () => {
  let service: NgxFloatingUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxFloatingUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
