import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Componente } from 'src/app/interfaces/interfaces';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  public options$: Observable<Componente[]>;
  constructor(
    private menuController: MenuController,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.options$ = this.dataService.getMenuOptions();
  }

  public showMenu() {
    this.menuController.open('second');
  }
}
