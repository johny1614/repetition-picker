import {ChangeDetectionStrategy, Component, forwardRef, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomInputComponent),
      multi: true
    }
  ]
})
export class CustomInputComponent implements OnInit, ControlValueAccessor {

  constructor() {
  }

  ngOnInit(): void {
    }

  onChange: any = () => {
  }
  onTouch: any = () => {
  }
  val;
  set value(val) {
    this.val = val
    this.onChange(val)
    this.onTouch(val)
  }

// this method sets the value programmatically
  writeValue(value: any) {
    this.value = value
  }

// upon UI element value changes, this method gets triggered
  registerOnChange(fn: any) {
    this.onChange = fn
  }

// upon touching the element, this method gets triggered
  registerOnTouched(fn: any) {
    this.onTouch = fn
  }

}
