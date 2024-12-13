import { TestBed } from '@angular/core/testing';

import { DesignerControlService } from './designer.control.service';

describe('DesignerControlService', () => {
  let service: DesignerControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DesignerControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
