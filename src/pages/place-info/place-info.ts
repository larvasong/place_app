import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

import { PlaceModel } from '../../models/place';

/**
 * Generated class for the PlaceInfo page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-place-info',
  templateUrl: 'place-info.html',
})
export class PlaceInfo {
  item:PlaceModel;
    constructor(public navCtrl: NavController,
      public navParams: NavParams,
      public platform: Platform
    ) {
      this.item = this.navParams.data.item;
    }

    ionViewDidLoad() {
      console.log('ionViewDidLoad PlaceDetailPage');
    }


    openMapApp(latitude, longitude) {
      console.log(latitude, longitude);
      let destination = latitude + ',' + longitude;
      // alert(destination);
      if(this.platform.is('ios')){
      	window.open('maps://?q=' + destination, '_system');
      } else {
      	let label = encodeURI('My Label');
      	window.open('geo:0,0?q=' + destination + '(' + label + ')', '_system');
      }
    }

  }
