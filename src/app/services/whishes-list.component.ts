import {Injectable} from "@angular/core";
import {List} from "../Domain/List";

@Injectable()
export class WhishesListService {

  arrayOfList: List[] = [];

  constructor () {
    this.loadData();
    console.log("Servicion inicializado!!");
  }

  updateData() {
    localStorage.setItem('data', JSON.stringify(this.arrayOfList));
  }

  loadData() {
    if (localStorage.getItem('data')) {
      this.arrayOfList = JSON.parse(localStorage.getItem('data'));
    }
  }

  addList(list:List) {
    this.arrayOfList.push(list);
    this.updateData();
  }

  deleteList(idx: number) {
    this.arrayOfList.splice(idx, 1);
    this.updateData();
  }
}
