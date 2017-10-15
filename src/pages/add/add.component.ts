import {Component, OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-add',
  templateUrl: 'add.component.html'
})
export class AddPage implements OnInit{

  listName : string;
  itemName : string;

  constructor(public navCtrl: NavController) {

  }

  ngOnInit() {}
}
