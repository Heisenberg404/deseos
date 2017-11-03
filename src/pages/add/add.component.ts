import {Component, OnInit} from '@angular/core';
import { AlertController, NavController } from 'ionic-angular';
import { ItemList, List } from '../../app/Domain/index';
import {WhishesListService} from "../../app/services/whishes-list.component";


@Component({
  selector: 'page-add',
  templateUrl: 'add.component.html'
})
export class AddPage implements OnInit{

  listName : string = '';
  itemName : string = '';
  items : ItemList[] = [];

  constructor(public navCtrl: NavController, public alertController:AlertController, public whishesService:WhishesListService) {

  }

  ngOnInit() {}

  add() {
    if (this.itemName.length === 0) {
      return;
    }

    let item = new ItemList();
    item.name = this.itemName;
    this.items.push(item);
    this.itemName = '';

  }

  deleteItem(index) {
    this.items.splice(index, 1);
  }

  saveList() {
    if (this.listName.length === 0) {
      let alert = this.alertController.create({
        title: 'List name',
        subTitle: 'List name is require!',
        buttons: ['OK']
      });
      alert.present();
      return;
    }

    let list = new List(this.listName);
    list.items = this.items;
    this.whishesService.addList(list);
    this.navCtrl.pop();
  }
}
