import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { UserModel } from '../../models/user';

/**
 * Generated class for the MyFollow page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-my-follow',
  templateUrl: 'my-follow.html',
})
export class MyFollow {

  followCollection:UserModel[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // init datalist
    var temp1:UserModel = new UserModel('hello', 'helloMyBebe@bebelove.com', 'assets/img/IMG_0345.jpg');
    temp1.birthDay = "2017-01-01";
    temp1.gender = "m";
    temp1.desc = "헤이 맨~~ 나는 야 수퍼 히어로";

    var temp2:any = new UserModel('hello', 'helloMyBebe@bebelove.com', 'assets/img/IMG_0345.jpg');
    temp2.birthDay = "2017-01-01";
    temp2.gender = "m";
    temp2.desc = "kkkkkkk";

    var temp3:any = new UserModel('hello', 'helloMyBebe@bebelove.com', 'assets/img/IMG_0345.jpg');
    temp3.birthDay = "2017-01-01";
    temp3.gender = "m";
    temp3.desc = "오랜만이란 어색한 인사";

    this.followCollection.push(temp1);
    this.followCollection.push(temp2);
    this.followCollection.push(temp3);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyFollowPage');
  }



  trackByFunction(index, item) {
    console.log("index:", index);
    console.log("item:", item);
    return item.userId;
  }

}
