import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.page.html',
  styleUrls: ['./button.page.scss'],
})
export class ButtonPage {
  public favorite?: boolean = false;

  public onClick() {
    this.favorite = !this.favorite;
  }
}
