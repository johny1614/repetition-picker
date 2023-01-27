import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-daily-repetition-picker',
  templateUrl: './daily-repetition-picker.component.html',
  styleUrls: ['./daily-repetition-picker.component.scss']
})
export class DailyRepetitionPickerComponent implements OnInit {

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
