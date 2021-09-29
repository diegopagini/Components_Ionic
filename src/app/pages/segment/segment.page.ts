import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {
  public heroes$: Observable<any>;
  public publisher = '';
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.heroes$ = this.dataService.getHeroes();
  }

  public segmentChanged(event) {
    console.log(event.detail.value);
    if (event.detail.value === 'todos') {
      return (this.publisher = '');
    }

    this.publisher = event.detail.value;
  }
}
