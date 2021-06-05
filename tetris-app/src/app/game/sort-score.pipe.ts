import { Pipe, PipeTransform } from '@angular/core';
import { Player } from '../data.service';

@Pipe({
  name: 'sortScore'
})
export class SortScorePipe implements PipeTransform {

  transform(players: Player[], obj: string, choose: string): Player[] {
    return players.sort((a, b) => {
      if (choose === 'asc') {
        return a[obj] - b[obj];
      } else {
        return b[obj] - a[obj];
      }
    });
  }


}
