import { Component } from '@angular/core';
import { IonicPage, NavController, Platform } from 'ionic-angular';
import { File } from '@ionic-native/file';

import { PlaceService } from '../../providers/place-service';

/**
 * Generated class for the Home page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class Home {

  public placeCollection=[];
  search: any;

  constructor(public navCtrl: NavController,
    public platform: Platform,
    private placeService: PlaceService,
    public file: File,
  ) {
    console.log("home constructor");
    // this.initPlaceCollection();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    this.platform.ready().then(() => {
      this.getPlaceCollection();
    });
  }

  // initPlaceCollection() {
  //   this.placeService.init().subscribe(isSet => {
  //     if(isSet){
  //       this.getPlaceCollection();
  //     }
  //   });
  // }


  getPlaceCollection() {
    this.placeService.searchPlaceCollection(this.search).subscribe(collection => {
      console.log("getPlaceCollection!!!");
      this.placeCollection = collection;
    });
  }



  trackByFunction(index, item) {
    return item.id
  }

}
