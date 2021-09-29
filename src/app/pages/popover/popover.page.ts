import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverInfoComponent } from 'src/app/components/popover-info/popover-info.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage {
  public data: number;
  constructor(private popoverController: PopoverController) {}

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverInfoComponent,
      event: ev,
      translucent: true,
      backdropDismiss: false,
    });
    await popover.present();

    const { data } = await popover.onWillDismiss();
    this.data = data;
  }
}
