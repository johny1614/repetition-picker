import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyRepetitionPickerComponent } from './daily-repetition-picker.component';

describe('DailyRepetitionPickerComponent', () => {
  let component: DailyRepetitionPickerComponent;
  let fixture: ComponentFixture<DailyRepetitionPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyRepetitionPickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyRepetitionPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
