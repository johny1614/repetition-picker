import {
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  EventEmitter,
  forwardRef,
  Input, OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
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
export class DailyRepetitionPickerComponent implements OnInit, ControlValueAccessor, OnChanges {

  @Input()
  removable: boolean = false;

  @Output()
  removeClick$ = new EventEmitter();

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('DailyRepetitionPickerComponent', changes)
  }

  onCloseClick(): void {
    this.removeClick$.emit();
  }


  constructor(private cdRef: ChangeDetectorRef) {
  }

  onChange: any = () => {
  }
  onTouch: any = () => {
  }

  val: string = '00:00';

  set value(val) {
    this.val = val
    this.onChange(val)
    this.onTouch(val)
    this.cdRef.markForCheck();
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
