import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyRepetitionPickerComponent } from './weekly-repetition-picker.component';

describe('WeeklyRepetitionPickerComponent', () => {
  let component: WeeklyRepetitionPickerComponent;
  let fixture: ComponentFixture<WeeklyRepetitionPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeeklyRepetitionPickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeeklyRepetitionPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
