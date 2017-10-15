import {Injectable} from "@angular/core";
import {List} from "../Domain/List";

@Injectable()
export class WhishesListService {

  arrayOfList: List[] = [];

  constructor () {

    let list1 = new List('university things');
    let list2 = new List('videogames that I desire');
    let list3 = new List('books for read');

    this.arrayOfList.push(list1);
    this.arrayOfList.push(list2);
    this.arrayOfList.push(list3);

    console.log("Servicion inicializado!!");
  }
}
