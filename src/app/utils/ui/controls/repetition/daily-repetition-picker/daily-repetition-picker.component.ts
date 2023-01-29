import {ChangeDetectionStrategy, Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-daily-repetition-picker',
  templateUrl: './daily-repetition-picker.component.html',
  styleUrls: ['./daily-repetition-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DailyRepetitionPickerComponent),
      multi: true
    }
  ]
})
export class DailyRepetitionPickerComponent implements OnInit, ControlValueAccessor {

  @Input()
  removable: boolean = false;

  @Output()
  removeClick$ = new EventEmitter();

  ngOnInit(): void {
  }

  onCloseClick(): void {
    this.removeClick$.emit();
  }


  constructor() {
  }

  onChange: any = () => {
  }
  onTouch: any = () => {
  }

  val: string;

  set value(val) {
    this.val = val
    this.onChange(val)
    this.onTouch(val)
  }

  writeValue(value: any) {
    this.value = value
  }

  registerOnChange(fn: any) {
    this.onChange = fn
  }

  registerOnTouched(fn: any) {
    this.onTouch = fn
  }
}
