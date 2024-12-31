import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundColorEditorComponent } from './background-color-editor.component';

describe('BackgroundColorEditorComponent', () => {
  let component: BackgroundColorEditorComponent;
  let fixture: ComponentFixture<BackgroundColorEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackgroundColorEditorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackgroundColorEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
