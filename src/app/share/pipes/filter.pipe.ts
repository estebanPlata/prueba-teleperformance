import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: Array<any>, userSearch: string) {
    if (items && items.length) {
      return items.filter(item => {
        if (userSearch && item.login.toString().toLowerCase().indexOf(userSearch.toLowerCase()) === -1) {
          return false;
        }
        return true;
      });
    } else {
      return items;
    }
  }
}
/* userSearch.length */
