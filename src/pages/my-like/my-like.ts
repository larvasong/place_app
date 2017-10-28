import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { PlaceInfo } from '../../pages/place-info/place-info';

import { PlaceModel } from '../../models/place';
import { UserModel } from '../../models/user';


/**
 * Generated class for the MyLike page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-my-like',
  templateUrl: 'my-like.html',
})
export class MyLike {
  placeCollection: PlaceModel[]=[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // init datalist
    var temp1:PlaceModel = new PlaceModel();
    temp1.user = new UserModel("doolybebe", "doolybebe@naver.com", "assets/img/IMG_0345.jpg");
    temp1.user.desc = "꿈꾸는 나비... 오케";
    temp1.user.birthDay = "2017-01-01";
    temp1.user.gender = "m";

    temp1.images = "assets/img/IMG_0363.jpg";
    temp1.subject = "시내야경";
    temp1.desc = "정말 멋진 곳이로군요!";
    temp1.likeCnt = 32;
    temp1.commentCnt = 3;
    temp1.writeTime = new Date("2017-03-01 11:35:11");
    temp1.latitude = 37.5753907;
    temp1.longitude = 126.969729;

    var temp2:PlaceModel = new PlaceModel();
    temp2.user = new UserModel("doolybebe", "doolybebe@naver.com", "assets/img/IMG_0345.jpg");
    temp2.user.desc = "꿈꾸는 나비... 오케";
    temp2.user.birthDay = "2017-01-01";
    temp2.user.gender = "m";

    temp2.images = "assets/img/IMG_0363.jpg";
    temp2.subject = "시내야경";
    temp2.desc = "정말 멋진 곳이로군요!";
    temp2.likeCnt = 32;
    temp2.commentCnt = 3;
    temp2.writeTime = new Date("2017-03-01 11:35:11");
    temp2.latitude = 37.5753907;
    temp2.longitude = 126.969729;

    var temp3:PlaceModel = new PlaceModel();
    temp3.user = new UserModel("doolybebe", "doolybebe@naver.com", "assets/img/IMG_0345.jpg");
    temp3.user.desc = "꿈꾸는 나비... 오케";
    temp3.user.birthDay = "2017-01-01";
    temp3.user.gender = "m";

    temp3.images = "assets/img/IMG_0363.jpg";
    temp3.subject = "시내야경";
    temp3.desc = "정말 멋진 곳이로군요!";
    temp3.likeCnt = 32;
    temp3.commentCnt = 3;
    temp3.writeTime = new Date("2017-03-01 11:35:11");
    temp3.latitude = 37.5753907;
    temp3.longitude = 126.969729;

    this.placeCollection.push(temp1);
    this.placeCollection.push(temp2);
    this.placeCollection.push(temp3);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyLikePage');
  }

  openPlacePage(item) {
    console.log('openPlacePage = ', item);
    this.navCtrl.push(PlaceInfo, { item: item });
  }

}
