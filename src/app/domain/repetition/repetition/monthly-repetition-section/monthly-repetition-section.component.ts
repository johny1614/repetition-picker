import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-monthly-repetition-section',
  templateUrl: './monthly-repetition-section.component.html',
  styleUrls: ['./monthly-repetition-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MonthlyRepetitionSectionComponent implements OnInit {

  days: Array<MonthCalendarDay> = this.createDays()
  weeks = [0, 1, 2, 3, 4]
  lastDay: MonthCalendarDay = {name: 'Last day', checked: false}

  constructor() {
  }

  ngOnInit(): void {
  }

  getDaysOfWeek(week: number) {
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
