import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {MinutePickerComponent} from './minute-picker/minute-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    MinutePickerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
// TODO extract in the end to seperate modules
