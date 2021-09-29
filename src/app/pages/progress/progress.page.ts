import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.page.html',
  styleUrls: ['./progress.page.scss'],
})
export class ProgressPage {
  public porcentaje = 0.05;

  public rangeChange(event) {
    console.log(event.detail.value);
    this.porcentaje = event.detail.value / 100;
  }
}
