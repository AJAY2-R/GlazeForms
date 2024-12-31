import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SizeMapperComponent } from './size-mapper.component';

describe('SizeMapperComponent', () => {
  let component: SizeMapperComponent;
  let fixture: ComponentFixture<SizeMapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SizeMapperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SizeMapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
