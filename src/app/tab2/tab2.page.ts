import { Router, NavigationExtras } from '@angular/router';
import { ServerService } from './../server.service';
import { Component } from '@angular/core';
import { ToastController, NavController } from '@ionic/angular';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  name;
  constructor(
    public db: ServerService,
    public tctrl: ToastController,
    public nctrl: NavController,
    private router: Router,
    ) {}

  async createItem(newitem) {

    const i = newitem;
    console.log(i);
    this.db.create(i);
    const toast = await this.tctrl.create({
      message: 'Your name inserted successfully.',
      position: 'bottom',
      duration: 1000
    });
    toast.present();
    this.name = '';
  }
}
