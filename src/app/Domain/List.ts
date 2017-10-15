import {ItemList} from "./ItemList";

export class List {
  name : string;
  finished : boolean;
  items : ItemList[];

  constructor(nombre : string) {
    this.name = nombre;
    this.finished = false;
  }
}
