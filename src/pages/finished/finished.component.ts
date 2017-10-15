import {Component, OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-finished',
  templateUrl: 'finished.component.html'
})
export class FinishedPage implements OnInit{

  constructor(public navCtrl: NavController) {

  }

  ngOnInit() {}
}
