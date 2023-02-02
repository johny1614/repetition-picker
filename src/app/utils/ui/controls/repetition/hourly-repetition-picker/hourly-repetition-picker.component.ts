import {
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component, DoCheck,
  EventEmitter,
  forwardRef,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import {NG_VALUE_ACCESSOR} from "@angular/forms";

// @ts-ignore
@Component({
  selector: 'app-hourly-repetition-picker',
  templateUrl: './hourly-repetition-picker.component.html',
  styleUrls: ['./hourly-repetition-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => HourlyRepetitionPickerComponent),
      multi: true
    }
  ]
})
export class HourlyRepetitionPickerComponent implements OnInit, OnChanges {

  @Input()
  removable: boolean = false;

  @Output()
  removeClick$ = new EventEmitter();


  ngOnInit(): void {
  }

  onCloseClick(): void {
    this.removeClick$.emit();
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
    this.cdRef.markForCheck();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('HourlyRepetitionPickerComponent', changes)
  }

  constructor(private cdRef: ChangeDetectorRef) {
  }

  writeValue(value: any) {
    this.value = value
  }

  registerOnChange(fn: any) {
    this.onChange = (newValue) => {
      fn(newValue);
      this.val = newValue;
    }
  }

  registerOnTouched(fn: any) {
    this.onTouch = fn
  }

}
