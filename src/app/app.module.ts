import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HourlyRepetitionPickerComponent} from './hourly-repetition-picker/hourly-repetition-picker.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { TimeScalePickerComponent } from './time-scale-picker/time-scale-picker.component';
import { MonthlyRepetitionPickerComponent } from './monthly-repetition-picker/monthly-repetition-picker.component';
import { DailyRepetitionPickerComponent } from './daily-repetition-picker/daily-repetition-picker.component';
import { WeeklyRepetitionPickerComponent } from './weekly-repetition-picker/weekly-repetition-picker.component';
import { CustomInputComponent } from './custom-input/custom-input.component';
import { HourlyRepetitionSectionComponent } from './hourly-repetition-section/hourly-repetition-section.component';
import { FormControlPipe } from './form-control.pipe';
import { DailyRepetitionSectionComponent } from './daily-repetition-section/daily-repetition-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HourlyRepetitionPickerComponent,
    TimeScalePickerComponent,
    MonthlyRepetitionPickerComponent,
    DailyRepetitionPickerComponent,
    WeeklyRepetitionPickerComponent,
    CustomInputComponent,
    HourlyRepetitionSectionComponent,
    FormControlPipe,
    DailyRepetitionSectionComponent
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
// TODO extract in the end to seperate modules
