import {Component, forwardRef, OnInit} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormArray,
  FormControl,
  FormGroup,
  NG_VALUE_ACCESSOR
} from "@angular/forms";
import {WeekDay} from "../week-day";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-weekly-repetition-picker',
  templateUrl: './weekly-repetition-picker.component.html',
  styleUrls: ['./weekly-repetition-picker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => WeeklyRepetitionPickerComponent),
      multi: true
    }
  ]
})
export class WeeklyRepetitionPickerComponent implements OnInit, ControlValueAccessor {

  formArray: FormArray;
  _onChange;
  _onTouched;

  dayLabels: Array<string> = WeekDay.getWeekDays().map(day => day.getShortName());
  formArrayValueChangesSubscription: Subscription;

  constructor() {
  }

  ngOnInit() {
  }

  writeValue(value: Array<boolean>): void {
    this.formArray = new FormArray(
      value.map((checkBoxValue: boolean) => {
        return new FormGroup({
          checked: new FormControl(checkBoxValue),
        });
      })
    );
    if (this.formArrayValueChangesSubscription) {
      this.formArrayValueChangesSubscription.unsubscribe();
    }
    this.formArrayValueChangesSubscription = this.formArray.valueChanges.subscribe(formArrayValue => {
      const writeValue: Array<boolean> = formArrayValue.map(el => el.checked);
      this._onChange(writeValue);
    });
  }

  registerOnChange(fn: (value: any) => void) {
    this._onChange = fn;
  }

  registerOnTouched(fn: (value: any) => void) {
    this._onTouched = fn;
  }
}
