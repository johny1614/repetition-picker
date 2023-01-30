import {ChangeDetectionStrategy, Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-monthly-repetition-picker',
  templateUrl: './monthly-repetition-picker.component.html',
  styleUrls: ['./monthly-repetition-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MonthlyRepetitionPickerComponent implements OnInit, OnChanges {


  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('MonthlyRepetitionPickerComponent', changes)
  }

}
