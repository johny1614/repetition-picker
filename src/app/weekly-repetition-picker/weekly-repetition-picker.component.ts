import {Component, OnInit} from '@angular/core';
import {WeekDay} from "../week-day";
import {Form, FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Subject, Subscription, takeUntil} from "rxjs";

@Component({
  selector: 'app-weekly-repetition-picker',
  templateUrl: './weekly-repetition-picker.component.html',
  styleUrls: ['./weekly-repetition-picker.component.scss']
})
export class WeeklyRepetitionPickerComponent implements OnInit {

  formGroup: FormGroup;
  timeFormControl: FormControl<string>;
  weekDaysFormArray: FormArray;

  // TODO moze jako Map V?
  checkboxesOptions: Array<{ name: string, value: string }> = this.getCheckboxesOptions();
  private destroy$ = new Subject<void>();

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.createForm();
    this.observeWeekDaysFormChanges();
  }

  ngOnDestroy() {
    this.destroy$.next();
  }


  private createForm(): void {
    this.timeFormControl = this.fb.control<string>('00:00') as FormControl<string>;
    this.weekDaysFormArray = this.fb.array(this.checkboxesOptions.map(x => false));
    this.formGroup = this.fb.group({
      weekDays: this.weekDaysFormArray,
      time: this.timeFormControl
    });
  }

  private observeWeekDaysFormChanges(): void {
    this.weekDaysFormArray.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe((_weekDaysFormArrayValue: Array<string | false>) => {
        const newFormValues = _weekDaysFormArrayValue.map((value: string | false, i: number) => value ? this.checkboxesOptions[i].value : false);
        this.weekDaysFormArray.setValue(
          newFormValues,
          {emitEvent: false}
        );

      });
  }

  private getCheckboxesOptions(): Array<{ name: string, value: string }> {
    return WeekDay.getWeekDays().map((weekDay: WeekDay) => {
      return {
        name: weekDay.getShortName(),
        value: weekDay.name
      }
    })
  }
}
