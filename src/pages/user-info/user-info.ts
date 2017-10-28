import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

import { UserModel } from '../../models/user';

/**
 * Generated class for the UserInfo page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-user-info',
  templateUrl: 'user-info.html',
})
export class UserInfo {
  @Input() item:UserModel;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public platform: Platform) {
    this.item = navParams.data.item;
    console.dir(this.item);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad UserDetailPage');
  }

  chgBirthDay(){
    console.dir(this.item);
  }

}
