import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HourlyRepetitionPickerComponent} from './hourly-repetition-picker.component';

describe('MinutePickerComponent', () => {
  let component: HourlyRepetitionPickerComponent;
  let fixture: ComponentFixture<HourlyRepetitionPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HourlyRepetitionPickerComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HourlyRepetitionPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
