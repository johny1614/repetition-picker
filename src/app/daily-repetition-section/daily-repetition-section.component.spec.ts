import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyRepetitionSectionComponent } from './daily-repetition-section.component';

describe('DailyRepetitionSectionComponent', () => {
  let component: DailyRepetitionSectionComponent;
  let fixture: ComponentFixture<DailyRepetitionSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyRepetitionSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyRepetitionSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
