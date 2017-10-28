import { Component, Input } from '@angular/core';
import { NavController, NavParams, ModalController, Platform } from 'ionic-angular';

import { PlaceInfo } from '../../pages/place-info/place-info';
import { UserInfo } from '../../pages/user-info/user-info';

import { PlaceModel } from '../../models/place';
import { UserModel } from '../../models/user';


/**
 * Generated class for the Place component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'place',
  templateUrl: 'place.html'
})
export class Place {

  @Input() item: PlaceModel;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public platform: Platform) {
    console.log('Hello Place Component');
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

  openPlacePage(item:PlaceModel) {
    this.navCtrl.push(PlaceInfo, { "item": item });
  }


  viewUserDetail(item:UserModel) {
    this.navCtrl.push(UserInfo, { "item": item });
  }

}
