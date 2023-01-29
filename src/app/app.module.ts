import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HourlyRepetitionPickerComponent} from './utils/ui/controls/repetition/hourly-repetition-picker/hourly-repetition-picker.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { TimeScalePickerComponent } from './utils/ui/controls/time-scale-picker/time-scale-picker.component';
import { MonthlyRepetitionPickerComponent } from './utils/ui/controls/repetition/monthly-repetition-picker/monthly-repetition-picker.component';
import { DailyRepetitionPickerComponent } from './utils/ui/controls/repetition/daily-repetition-picker/daily-repetition-picker.component';
import { WeeklyRepetitionPickerComponent } from './utils/ui/controls/repetition/weekly-repetition-picker/weekly-repetition-picker.component';
import { CustomInputComponent } from './custom-input/custom-input.component';
import { FormControlPipe } from './form-control.pipe';
import { FormGroupPipe } from './form-group.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HourlyRepetitionPickerComponent,
    TimeScalePickerComponent,
    MonthlyRepetitionPickerComponent,
    DailyRepetitionPickerComponent,
    WeeklyRepetitionPickerComponent,
    CustomInputComponent,
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
