import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-weekly-repetition-section',
  templateUrl: './weekly-repetition-section.component.html',
  styleUrls: ['./weekly-repetition-section.component.scss']
})
export class WeeklyRepetitionSectionComponent implements OnInit {

  formGroup: FormGroup

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    const timeFormControl = this.fb.control<string>('00:00') as FormControl<string>;
    const weekDaysFormControl = this.fb.control(Array.from({length: 7}, el => el = false));
    this.formGroup = this.fb.group({
      weekDays: weekDaysFormControl,
      time: timeFormControl
    });
  }

}
