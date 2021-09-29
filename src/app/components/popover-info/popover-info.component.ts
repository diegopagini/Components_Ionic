import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover-info',
  templateUrl: './popover-info.component.html',
  styleUrls: ['./popover-info.component.scss'],
})
export class PopoverInfoComponent {
  public items: number[] = Array(40);

  constructor(private popoverController: PopoverController) {}

  public onClick(index: number) {
    console.log(index);
    this.popoverController.dismiss({
      item: index,
    });
  }
}
