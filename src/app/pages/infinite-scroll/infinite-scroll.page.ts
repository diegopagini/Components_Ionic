import { Component, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  public data: any[] = Array(20);

  public loadData(event) {
    if (this.data.length > 70) {
      this.infiniteScroll.complete();
      this.infiniteScroll.disabled = true;
      return;
    }
    // console.log(event);
    setTimeout(() => {
      const newArr = Array(20);
      this.data.push(...newArr);
      this.infiniteScroll.complete();
    }, 1500);
  }
}
