import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  formControls: FormArray<FormControl<any>> = new FormArray<FormControl<any>>([new FormControl(0)]);

  constructor() {
  }

  ngOnInit(): void {
  }

  add(): void {
    this.formControls?.controls.push(new FormControl(0));
  }

  onRemoveClick(index: number): void {
    this.formControls.removeAt(index);
  }

  isRemovable(index: number): boolean {
    return index > 0 || this.formControls.controls.length > 1;
  }
}
