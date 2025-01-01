import { TestBed } from '@angular/core/testing';

import { PropertyEditorService } from './property.editor.service';

describe('PropertyEditorService', () => {
  let service: PropertyEditorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PropertyEditorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
