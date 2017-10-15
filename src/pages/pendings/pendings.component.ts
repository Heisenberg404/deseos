import {Component, OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import {WhishesListService} from "../../app/services/whishes-list.component";
import {AddPage} from "../add/add.component";

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
}
