
import {Component, OnInit} from "@angular/core";
import {AlertController, NavController, NavParams} from "ionic-angular";
import {List} from "../../app/Domain/index";
import {ItemList} from "../../app/Domain/ItemList";
import {WhishesListService} from "../../app/services/whishes-list.component";

@Component({
  selector: 'app-detail',
  templateUrl: 'detail.component.html'
})

export class DetailComponent implements OnInit {

  idx:number;
  list:List;

  constructor(public navCtrl: NavController, public navParams: NavParams, public whishesService: WhishesListService,
                public aletCtrl: AlertController) {
    this.idx = this.navParams.get("index");
    this.list = this.navParams.get("list");
  }

  ngOnInit() {}

  update(item: ItemList) {
    item.complete = !item.complete;
    let allMarked = true;
    for (let item of this.list.items){
      if (!item.complete){
        allMarked = false;
        break;
      }
    }
    this.list.finished = allMarked;
    this.whishesService.updateData()
  }

  deleteItem() {
    let confirm = this.aletCtrl.create({
      title: this.list.name,
      message: 'Are you sure, do you want to delete the list?',
      buttons: ['Disagree',
        {
          text: 'Agree',
          handler: () => {
            console.log('Agree clicked');
            this.whishesService.deleteList(this.idx);
            this.navCtrl.pop();
          }
        }
      ]
    });
    confirm.present();
  }

}
