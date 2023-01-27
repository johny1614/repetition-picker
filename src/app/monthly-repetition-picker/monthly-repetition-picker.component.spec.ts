import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyRepetitionPickerComponent } from './monthly-repetition-picker.component';

describe('MonthlyRepetitionPickerComponent', () => {
  let component: MonthlyRepetitionPickerComponent;
  let fixture: ComponentFixture<MonthlyRepetitionPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthlyRepetitionPickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthlyRepetitionPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
