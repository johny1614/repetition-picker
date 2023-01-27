import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-minute-picker',
  templateUrl: './minute-picker.component.html',
  styleUrls: ['./minute-picker.component.scss']
})
export class MinutePickerComponent implements OnInit {

  @Input()
  removable: boolean = false;

  @Output()
  removeClick$ = new EventEmitter();

  ngOnInit(): void {
  }

  onCloseClick(): void {
    this.removeClick$.emit();
  }
}
