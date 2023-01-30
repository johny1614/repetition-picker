import {ChangeDetectionStrategy, Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-monthly-repetition-section',
  templateUrl: './monthly-repetition-section.component.html',
  styleUrls: ['./monthly-repetition-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MonthlyRepetitionSectionComponent implements OnInit, OnChanges {

  days: Array<MonthCalendarDay> = this.createDays()
  weeks = [0, 1, 2, 3, 4]
  lastDay: MonthCalendarDay = {name: 'Last day', checked: false}
  time = new FormControl('00:00')

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('MonthlyRepetitionSectionComponent', changes)
  }

  ngOnInit(): void {
  }

  getDaysOfWeek(week: number): Array<MonthCalendarDay> {
    return this.days.slice(7 * week, 7 * week + 7);
  }

  private createDays(): Array<MonthCalendarDay> {
    const allMonthDays = [...Array(31).keys()].map(el => {
        return {
          checked: false,
          name: el + 1 + ''
        }
      }
    );
    return allMonthDays;
  }
}

interface MonthCalendarDay {
  name: string;
  checked: boolean;
}
