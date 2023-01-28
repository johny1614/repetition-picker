import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HourlyRepetitionSectionComponent } from './hourly-repetition-section.component';

describe('HourlyRepetitionSectionComponent', () => {
  let component: HourlyRepetitionSectionComponent;
  let fixture: ComponentFixture<HourlyRepetitionSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HourlyRepetitionSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HourlyRepetitionSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
