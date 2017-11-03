import {Component, OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import {WhishesListService} from "../../app/services/whishes-list.component";
import {AddPage} from "../add/add.component";
import {DetailComponent} from "../details/detail.component";

@Component({
  selector: 'page-pendings',
  templateUrl: 'pendings.component.html'
})
export class PendingsPage implements OnInit{

  constructor(public navCtrl: NavController, public whishesService : WhishesListService) {

  }

  ngOnInit() {}

  goToAdd() {
    this.navCtrl.push(AddPage);
  }

  getDetails(list, index) {
    this.navCtrl.push(DetailComponent, { list, index });
  }
}
