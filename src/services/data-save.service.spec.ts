import { TestBed } from '@angular/core/testing';

import { DataSaveService } from './data-save.service';

describe('DataSaveService', () => {
  let service: DataSaveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataSaveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
