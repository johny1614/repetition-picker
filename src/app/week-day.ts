export class WeekDay {
  public static MONDAY = new WeekDay('Monday');
  public static TUESDAY = new WeekDay('Tuesday');
  public static WEDNESDAY = new WeekDay('Wednesday');
  public static THURSDAY = new WeekDay('Thursday');
  public static FRIDAY = new WeekDay('Friday');
  public static SATURDAY = new WeekDay('Saturday');
  public static SUNDAY = new WeekDay('Sunday');

  private constructor(public name: string) {
  }

  static getWeekDays(): Array<WeekDay> {
    return [WeekDay.MONDAY, WeekDay.TUESDAY, WeekDay.WEDNESDAY,
      WeekDay.THURSDAY, WeekDay.FRIDAY, WeekDay.SATURDAY, WeekDay.SUNDAY]
  }

  getShortName(): string {
    return this.name.substring(0, 3);
  }

}
