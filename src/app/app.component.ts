import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup} from "@angular/forms";
import {TimeScaleName} from "./time-scale-name";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  scaleNames = TimeScaleName;


  formGroup = new FormGroup({
    scalePicker: new FormControl(TimeScaleName.Weekly),
    repetitions: new FormArray([new FormControl(null)])
  })

  constructor() {
  }

  ngOnInit(): void {
  }
}
