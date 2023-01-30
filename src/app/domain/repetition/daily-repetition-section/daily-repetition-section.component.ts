import {ChangeDetectionStrategy, Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormArray, FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-daily-repetition-section',
  templateUrl: './daily-repetition-section.component.html',
  styleUrls: ['./daily-repetition-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DailyRepetitionSectionComponent implements OnInit, OnChanges {

  formArray: FormArray;

  constructor(private fb: FormBuilder) {
    this.formArray = this.fb.array(['00:00'])
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('DailyRepetitionSectionComponent', changes)
  }

  isRemovable(index: number): boolean {
    return index > 0 || this.formArray.length > 1;
  }

  addDailyPicker(): void {
    this.formArray.push(this.fb.control('00:00'));
  }

  onRemoveClick(index: number): void {
    this.formArray.removeAt(index);
  }


}
