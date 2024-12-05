import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FramepanelComponent } from './framepanel.component';

describe('FramepanelComponent', () => {
  let component: FramepanelComponent;
  let fixture: ComponentFixture<FramepanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FramepanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FramepanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
