import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormArray, FormBuilder,
  FormControl,
  FormGroup,
  NG_VALUE_ACCESSOR
} from "@angular/forms";
import {WeekDay} from "./week-day";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-weekly-repetition-picker',
  templateUrl: './weekly-repetition-picker.component.html',
  styleUrls: ['./weekly-repetition-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => WeeklyRepetitionPickerComponent),
      multi: true
    }
  ]
})
export class WeeklyRepetitionPickerComponent implements ControlValueAccessor, OnChanges, OnDestroy {

  formArray: FormArray;
  _onChange;
  _onTouched;

  dayLabels: Array<string> = WeekDay.getWeekDays().map(day => day.getShortName());
  formArrayValueChangesSubscription: Subscription;

  constructor(private fb: FormBuilder) {
  }

  ngOnDestroy(): void {
    if(this.formArrayValueChangesSubscription){
      this.formArrayValueChangesSubscription.unsubscribe();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('WeeklyRepetitionPickerComponent', changes)
  }


  writeValue(value: Array<boolean>): void {
    this.formArray = this.fb.array(
      value.map((checkBoxValue: boolean) => {
        return this.fb.group({
          checked: new FormControl(checkBoxValue),
        });
      })
    );
    this.observeFormArrayChanges();
  }

  registerOnChange(fn: (value: any) => void) {
    this._onChange = fn;
  }

  registerOnTouched(fn: (value: any) => void) {
    this._onTouched = fn;
  }

  private observeFormArrayChanges() {
    if (this.formArrayValueChangesSubscription) {
      this.formArrayValueChangesSubscription.unsubscribe();
    }
    this.formArrayValueChangesSubscription = this.formArray.valueChanges.subscribe(formArrayValue => {
      const writeValue: Array<boolean> = formArrayValue.map(el => el.checked);
      this._onChange(writeValue);
    });
  }
}
