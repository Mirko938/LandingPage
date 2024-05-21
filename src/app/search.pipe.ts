import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  standalone: true,
})
export class SearchPipe implements PipeTransform {
  transform(value: any, args: any): any {
    if (!value) return null; //se non c'è il valore cercato ritorna null
    if (!args) return value; //se non si cerca nulla ritorna tutti i dati

    args = args.toLowerCase();
    return value.filter((item: any) => {
      return JSON.stringify(item).toLocaleLowerCase().includes(args);
    });
  }
}
