import { TestBed } from '@angular/core/testing';

import { SelectionOverlayService } from './selection-overlay.service';

describe('SelectionOverlayService', () => {
  let service: SelectionOverlayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectionOverlayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
