import { TestBed } from '@angular/core/testing';

import { DesignerTreeService } from './designer-tree.service';

describe('DesignerTreeService', () => {
  let service: DesignerTreeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DesignerTreeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
