import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeScalePickerComponent } from './time-scale-picker.component';

describe('TimeScalePickerComponent', () => {
  let component: TimeScalePickerComponent;
  let fixture: ComponentFixture<TimeScalePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeScalePickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeScalePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
