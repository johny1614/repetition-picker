import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyRepetitionSectionComponent } from './weekly-repetition-section.component';

describe('WeeklyRepetitionSectionComponent', () => {
  let component: WeeklyRepetitionSectionComponent;
  let fixture: ComponentFixture<WeeklyRepetitionSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeeklyRepetitionSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeeklyRepetitionSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
