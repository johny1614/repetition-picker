import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-hourly-repetition-picker',
  templateUrl: './hourly-repetition-picker.component.html',
  styleUrls: ['./hourly-repetition-picker.component.scss']
})
export class HourlyRepetitionPickerComponent implements OnInit {

  @Input()
  removable: boolean = false;

  @Input()
  // @ts-ignore
  control: FormControl;

  @Output()
  removeClick$ = new EventEmitter();

  ngOnInit(): void {
  }

  onCloseClick(): void {
    this.removeClick$.emit();
  }
}
