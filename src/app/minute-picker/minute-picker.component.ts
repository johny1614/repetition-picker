import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-minute-picker',
  templateUrl: './minute-picker.component.html',
  styleUrls: ['./minute-picker.component.scss']
})
export class MinutePickerComponent implements OnInit {

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
