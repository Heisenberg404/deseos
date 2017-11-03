import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
//servicios
import {WhishesListService} from '../app/services/whishes-list.component'
//componentes
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PendingsPage} from "../pages/pendings/pendings.component";
import {FinishedPage} from "../pages/finished/finished.component";
import {AddPage} from "../pages/add/add.component";
import {PlaceholderPipe} from "./pipes/placeholder.pipe";
import {PendingsPipe} from "./pipes/pendings.pipe";
import {DetailComponent} from "../pages/details/detail.component";

@NgModule({
  declarations: [
    MyApp,
    PendingsPage,
    FinishedPage,
    TabsPage,
    AddPage,
    PlaceholderPipe,
    DetailComponent,
    PendingsPipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PendingsPage,
    FinishedPage,
    TabsPage,
    AddPage,
    DetailComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    WhishesListService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
