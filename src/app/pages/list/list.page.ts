import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  @ViewChild('list') ionList: IonList;

  public users$: Observable<any>;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.users$ = this.dataService.getUsers();
  }

  public favorite(user: any): void {
    console.log('favorite:', user);
    this.ionList.closeSlidingItems();
  }

  public share(user: any): void {
    console.log('share:', user);
    this.ionList.closeSlidingItems();
  }

  public delete(user: any): void {
    console.log('delete:', user);
    this.ionList.closeSlidingItems();
  }
}
