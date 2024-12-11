import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextblockComponent } from './textblock.component';

describe('TextblockComponent', () => {
  let component: TextblockComponent;
  let fixture: ComponentFixture<TextblockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextblockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextblockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
