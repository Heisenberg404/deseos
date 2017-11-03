import {Component, OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import {WhishesListService} from "../../app/services/whishes-list.component";
import {DetailComponent} from "../details/detail.component";

@Component({
  selector: 'page-finished',
  templateUrl: 'finished.component.html'
})
export class FinishedPage implements OnInit{

  constructor(public navCtrl: NavController, public whishesService : WhishesListService) {

  }

  ngOnInit() {}

  getDetails(list, index) {
    this.navCtrl.push(DetailComponent, { list, index });
  }
}
