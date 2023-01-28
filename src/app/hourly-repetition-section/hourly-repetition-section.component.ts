import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl} from "@angular/forms";

@Component({
  selector: 'app-hourly-repetition-section',
  templateUrl: './hourly-repetition-section.component.html',
  styleUrls: ['./hourly-repetition-section.component.scss']
})
export class HourlyRepetitionSectionComponent implements OnInit {

  formArray: FormArray;

  constructor(private fb: FormBuilder) {
    this.formArray = this.fb.array([this.fb.control(0)]);
  }

  ngOnInit(): void {
  }

  onRemoveClick(index: number): void {
    this.formArray.removeAt(index);
  }

  isRemovable(index: number): boolean {
    return index > 0 || this.formArray.length > 1;
  }

  add(): void {
    this.formArray.push(this.fb.control(0));
  }


}
