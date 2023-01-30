import {ChangeDetectionStrategy, Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormArray, FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-hourly-repetition-section',
  templateUrl: './hourly-repetition-section.component.html',
  styleUrls: ['./hourly-repetition-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HourlyRepetitionSectionComponent implements OnInit, OnChanges {

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

  addHourlyPicker(): void {
    this.formArray.push(this.fb.control(0));
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('HourlyRepetitionSectionComponent',changes)
  }


}
