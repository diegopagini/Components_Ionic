import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro',
})
export class FiltroPipe implements PipeTransform {
  transform(array: any[], text: string = '', search: string = 'title'): any[] {
    if (text === '') {
      return array;
    }

    if (!array) {
      return array;
    }

    text = text.toLocaleLowerCase();

    return array.filter((item) => item[search].toLowerCase().includes(text));
  }
}
