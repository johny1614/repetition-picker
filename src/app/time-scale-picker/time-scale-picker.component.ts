import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {TimeScaleName, timeScaleNames} from "../time-scale-name";

@Component({
  selector: 'app-time-scale-picker',
  templateUrl: './time-scale-picker.component.html',
  styleUrls: ['./time-scale-picker.component.scss']
})
export class TimeScalePickerComponent implements OnInit {

  @Input()
    // @ts-ignore
  control: FormControl;


  scaleNames: Array<TimeScaleName> = timeScaleNames;

  constructor() {
  }

  ngOnInit(): void {
  }

}
