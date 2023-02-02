import {ChangeDetectionStrategy, Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-weekly-repetition-section',
  templateUrl: './weekly-repetition-section.component.html',
  styleUrls: ['./weekly-repetition-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeeklyRepetitionSectionComponent implements OnInit, OnChanges {

  formGroup: FormGroup

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    const timeFormControl: FormControl<string> = this.fb.control<string>('00:00') as FormControl<string>;
    const weekDaysFormControl: FormControl<Array<boolean>> = this.getWeekDaysFormControl();
    this.formGroup = this.fb.group({
      weekDays: weekDaysFormControl,
      time: timeFormControl
    });
  }

  private getWeekDaysFormControl(): FormControl<Array<boolean>> {
    return this.fb.control(Array.from({length: 7}, el => el = false)) as FormControl<Array<boolean>>;
  }


  ngOnChanges(changes: SimpleChanges): void {
    console.log('WeeklyRepetitionSectionComponent', changes)
  }
}
