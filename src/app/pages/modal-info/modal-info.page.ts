import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage {
  @Input() nombre: string;
  @Input() pais: string;

  constructor(private modalController: ModalController) {}

  public salirSinArgunmentos() {
    this.modalController.dismiss();
  }

  public salirConArgumentos() {
    this.modalController.dismiss({
      nombre: 'Sara',
      pais: 'Italia',
    });
  }
}
