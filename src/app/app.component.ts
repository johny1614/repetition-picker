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
    scalePicker: new FormControl(TimeScaleName.Daily),
    repetitions: new FormArray([new FormControl('12:15')])
  })

  constructor() {
  }

  ngOnInit(): void {
  }

  add(): void {
    this.formGroup.controls.repetitions.push(new FormControl('12:22'));
  }

  onRemoveClick(index: number): void {
    this.formGroup.controls.repetitions.removeAt(index);
  }

  isRemovable(index: number): boolean {
    return index > 0 || this.formGroup.controls.repetitions.length > 1;
  }
}
