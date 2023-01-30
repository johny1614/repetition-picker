import {ChangeDetectionStrategy, Component, forwardRef, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {TimeScale, timeScaleNames} from "./time-scale";

@Component({
  selector: 'app-time-scale-picker',
  templateUrl: './time-scale-picker.component.html',
  styleUrls: ['./time-scale-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TimeScalePickerComponent),
      multi: true
    }
  ]
})
export class TimeScalePickerComponent implements OnInit, ControlValueAccessor, OnChanges {

  private static componentInstances: number = 0;
  componentId: string;
  scaleNames: Array<TimeScale> = timeScaleNames;

  ngOnInit(): void {
    this.componentId = (++TimeScalePickerComponent.componentInstances).toString();
  }

  onChange: any = () => {
  }
  onTouch: any = () => {
  }

  val: string;

  ngOnChanges(changes: SimpleChanges): void {
    console.log('TimeScalePickerComponent', changes)
  }

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
