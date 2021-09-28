import { Component } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage {
  public characters: string[] = [
    'Aquaman',
    'Superman',
    'Batman',
    'Wonder-Woman',
    'Flash',
    'Green Lanter',
  ];
  public reorderDisabled = false;

  public doReorder(event: any) {
    const moveItem = this.characters.splice(event.detail.from, 1)[0];
    this.characters.splice(event.detail.to, 0, moveItem);
    console.log(event);
    console.log(this.characters);
    event.detail.complete();
  }

  public onClick() {
    this.reorderDisabled = !this.reorderDisabled;
  }
}
