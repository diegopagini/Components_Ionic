import { Component } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage {
  public date: Date = new Date();
  public customYearsValues: number[] = [2025, 2026, 2027, 2028, 2029, 2030];
  public customPickerOptions: any = {
    buttons: [
      {
        text: 'Hola',
        handler: (event) => {
          console.log(event);
        },
      },
      {
        text: 'Mundo',
        handler: (event) => {
          alert(JSON.stringify(event));
        },
      },
    ],
  };

  public dateChange(event) {
    console.log(event);
    console.log(new Date(event.detail.value));
  }
}
