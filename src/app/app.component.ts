import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl} from "@angular/forms";
import {TimeScale} from "./utils/ui/controls/time-scale-picker/time-scale";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  timeScales = TimeScale;
  scalePickerFormControl: FormControl<TimeScale | null>;

  constructor(private fb: FormBuilder) {
    this.scalePickerFormControl = this.fb.control(null);
  }

  ngOnInit(): void {
  }

  getTimeScale(): TimeScale | null {
    return this.scalePickerFormControl.value;
  }
}
