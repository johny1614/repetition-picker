import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MinutePickerComponent} from './minute-picker.component';

describe('MinutePickerComponent', () => {
  let component: MinutePickerComponent;
  let fixture: ComponentFixture<MinutePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MinutePickerComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MinutePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
