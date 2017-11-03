
import {Pipe, PipeTransform} from "@angular/core";
import {List} from "../Domain/List";

@Pipe({
  name: 'pendings',
  pure: false

})

export class PendingsPipe implements PipeTransform {
  transform(lists: List[], state: boolean = false): List[] {
    let newList: List[] = [];
    for( let list of lists){
      if (list.finished == state){
        newList.push(list);
      }
    }
    return newList;
  }
}
