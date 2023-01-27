import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'repetition-picker';

  // TODO some model for sure needed
  controls = [{}]

  add() {
    this.controls.push({});
  }

  onRemoveClick(index: number): void {
    this.controls.splice(index, 1);
  }

  isRemovable(index: number) {
    return index > 0 || this.controls.length > 1;
  }
}
