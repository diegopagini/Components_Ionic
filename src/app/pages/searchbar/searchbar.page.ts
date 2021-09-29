import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit {
  public albums$: Observable<any>;
  public searchText: string;
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.albums$ = this.dataService.getAlbums();
  }

  public onSearchChange(event) {
    this.searchText = event.detail.value;
  }
}
