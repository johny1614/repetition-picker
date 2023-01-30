import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HourlyRepetitionPickerComponent} from './utils/ui/controls/repetition/hourly-repetition-picker/hourly-repetition-picker.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { TimeScalePickerComponent } from './utils/ui/controls/time-scale-picker/time-scale-picker.component';
import { MonthlyRepetitionPickerComponent } from './utils/ui/controls/repetition/monthly-repetition-picker/monthly-repetition-picker.component';
import { DailyRepetitionPickerComponent } from './utils/ui/controls/repetition/daily-repetition-picker/daily-repetition-picker.component';
import { WeeklyRepetitionPickerComponent } from './utils/ui/controls/repetition/weekly-repetition-picker/weekly-repetition-picker.component';
import { FormControlPipe } from './utils/ui/pipes/form-control.pipe';
import { FormGroupPipe } from './utils/ui/pipes/form-group.pipe';
import {
  HourlyRepetitionSectionComponent
} from "./domain/repetition/hourly-repetition-section/hourly-repetition-section.component";
import {
  DailyRepetitionSectionComponent
} from "./domain/repetition/daily-repetition-section/daily-repetition-section.component";
import {WeeklyRepetitionSectionComponent} from "./domain/repetition/weekly-repetition-section/weekly-repetition-section.component";
import {
  MonthlyRepetitionSectionComponent
} from "./domain/repetition/monthly-repetition-section/monthly-repetition-section.component";

@NgModule({
  declarations: [
    AppComponent,
    HourlyRepetitionPickerComponent,
    TimeScalePickerComponent,
    HourlyRepetitionSectionComponent,
    DailyRepetitionSectionComponent,
    WeeklyRepetitionSectionComponent,
    MonthlyRepetitionSectionComponent,
    MonthlyRepetitionPickerComponent,
    DailyRepetitionPickerComponent,
    WeeklyRepetitionPickerComponent,
    FormControlPipe,
    FormGroupPipe,
// TODO extract to seperate modules
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
