import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyRepetitionSectionComponent } from './monthly-repetition-section.component';

describe('MonthlyRepetitionSectionComponent', () => {
  let component: MonthlyRepetitionSectionComponent;
  let fixture: ComponentFixture<MonthlyRepetitionSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthlyRepetitionSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthlyRepetitionSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
