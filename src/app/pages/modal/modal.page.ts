import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage {
  constructor(private modalController: ModalController) {}

  async showModal() {
    const modal = await this.modalController.create({
      component: ModalInfoPage,
      componentProps: {
        nombre: 'Diego',
        pais: 'España',
      },
    });
    await modal.present();

    const resp = await modal.onDidDismiss();
    const { data } = resp;
    if (data) {
      alert(JSON.stringify(data));
    }
  }
}
