import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-monthly-repetition-picker',
  templateUrl: './monthly-repetition-picker.component.html',
  styleUrls: ['./monthly-repetition-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MonthlyRepetitionPickerComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

}
