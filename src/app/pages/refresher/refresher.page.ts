import { Component } from '@angular/core';

@Component({
  selector: 'app-refresher',
  templateUrl: './refresher.page.html',
  styleUrls: ['./refresher.page.scss'],
})
export class RefresherPage {
  public items: any[] = [];

  public doRefresh(event) {
    console.log(event);
    setTimeout(() => {
      this.items = Array(20);
      event.target.complete();
    }, 1500);
  }
}
