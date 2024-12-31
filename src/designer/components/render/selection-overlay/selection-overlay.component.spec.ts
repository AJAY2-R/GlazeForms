import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionOverlayComponent } from './selection-overlay.component';

describe('SelectionOverlayComponent', () => {
  let component: SelectionOverlayComponent;
  let fixture: ComponentFixture<SelectionOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectionOverlayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectionOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
