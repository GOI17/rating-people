import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customFilter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], filter: string): any {
    console.log(filter);
    if (filter !== '') {
      return items.filter(
        (item, index) =>
          item.username.toLowerCase().charAt(index) ===
          filter.toLowerCase().charAt(index)
      );
    }
    return items;
  }
}
