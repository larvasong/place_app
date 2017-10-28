import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

import { Login } from '../login/login';

import { AuthService } from '../../providers/auth-service';


/**
 * Generated class for the Setting page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class Setting {
  userInfo;
  setFlag: string = "myInfo";
  isAndroid: boolean = false;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    platform: Platform,
    private auth: AuthService) {
      this.isAndroid = platform.is('android');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
    this.userInfo = this.auth.getUserInfo();
    console.log(this.userInfo);
  }

  public goLogin(){
    this.navCtrl.push(Login);
  }


  public logout() {
    this.auth.logout().subscribe(succ => {
      // this.
      console.log(succ);
      if(succ) {
        this.userInfo = this.auth.getUserInfo();
      }
    });
  }

}
