import { Injectable } from '@angular/core';
import { AlertController, LoadingController, Loading } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Storage } from '@ionic/storage';
import { File } from '@ionic-native/file';

import { PlaceModel } from '../models/place';
import { UserModel } from '../models/user';


@Injectable()
export class PlaceService {
  placeCollection:PlaceModel[] = [];
  loading: Loading;
  constructor(public storage: Storage,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    public file: File,
  ){
    console.log("place-service constructor");
    console.log(this.file);
    console.log(this.file.dataDirectory);
  }

  public init() {
    // return Observable.create(observer => {
    //   let tempCollection = [];
    //   // init datalist
    //   var temp1:PlaceModel = new PlaceModel();
    //   temp1.user = new UserModel("doolybebe", "doolybebe@naver.com", "assets/img/IMG_0345.jpg");
    //   temp1.user.desc = "꿈꾸는 나비... 오케";
    //   temp1.user.birthDay = "2017-01-01";
    //   temp1.user.gender = "m";
    //
    //   temp1.images = "assets/img/IMG_0363.jpg";
    //   temp1.subject = "시내야경";
    //   temp1.desc = "정말 멋진 곳이로군요!";
    //   temp1.likeCnt = 32;
    //   temp1.commentCnt = 3;
    //   temp1.writeTime = new Date("2017-03-01 11:35:11");
    //   temp1.latitude = 37.5753907;
    //   temp1.longitude = 126.969729;
    //
    //   var temp2:PlaceModel = new PlaceModel();
    //   temp2.user = new UserModel("doolybebe", "doolybebe@naver.com", "assets/img/IMG_0345.jpg");
    //   temp2.user.desc = "꿈꾸는 나비... 오케";
    //   temp2.user.birthDay = "2017-01-01";
    //   temp2.user.gender = "m";
    //
    //   temp2.images = "assets/img/IMG_0363.jpg";
    //   temp2.subject = "시내야경";
    //   temp2.desc = "정말 멋진 곳이로군요!";
    //   temp2.likeCnt = 32;
    //   temp2.commentCnt = 3;
    //   temp2.writeTime = new Date("2017-03-01 11:35:11");
    //   temp2.latitude = 37.5753907;
    //   temp2.longitude = 126.969729;
    //
    //   tempCollection.push(temp1);
    //   tempCollection.push(temp2);
    //
    //   this.storage.ready().then(() => {
    //     console.log("ready storage");
    //
    //     this.storage.keys().then((keys) => {
    //       console.log('key~', keys);
    //     });
    //
    //     // this.storage.set("placeCollection", tempCollection).then((collection) => {
    //     //   console.log("set this complete ", collection);
    //     //   observer.next(true);
    //     //   observer.complete();
    //     // }).catch((error)=>{
    //     //   console.log("error = ", error);
    //     //   return Observable.throw("data set error= " + error);
    //     // });
    //
    //     // this.storage.clear().then(() => {
    //     //   console.log("clear storage");
    //     //   this.storage.set("placeCollection", tempCollection).then((collection) => {
    //     //     console.log("set this complete ", collection);
    //     //     observer.next(true);
    //     //     observer.complete();
    //     //   }).catch((error)=>{
    //     //     console.log("error = ", error);
    //     //     return Observable.throw("data set error= " + error);
    //     //   });
    //     // });
    //   });
    // });
  }



  public save(place:PlaceModel) {
    this.showLoading();
    // validate
    if (!place) {
      console.log("save failed");
      this.showError("Please insert correct contents");
      return Observable.throw("Please insert correct contents");
    }

    place.user = new UserModel("mr. doctor", "abc@abc.com", "assets/img/IMG_0345.jpg");
    place.user.desc = "i love 머진 장소";
    place.likeCnt = 0;
    place.commentCnt = 0;
    place.writeTime = new Date("2017-03-03 11:35:11");

    console.log("ok saveing ...");
    return Observable.create(observer => {
      this.storage.ready().then(() => {
       console.log("set Storage Places in save function");
       this.placeCollection.push(place);
       this.storage.set("placeCollection", this.placeCollection).then((collection) => {
         console.log("set this complete ", collection);
         observer.next(true);
         observer.complete();
         setTimeout(() => {
           this.loading.dismiss();
         });

       }).catch((error)=>{
         console.log("error = ", error);
         this.showError(error);
         return Observable.throw("data set error= " + error);
       });
     }).catch((error) => {
       console.log("error!!!=", error);
       this.showError(error);
       observer.error(error);
     });
    });

  }


  public searchPlaceCollection(search:any) {
    this.showLoading();

    return Observable.create(observer => {
      this.storage.ready().then(() => {
       console.log("get Storage Places");
       this.storage.get("placeCollection").then((collection) => {
         this.placeCollection = collection;
         observer.next(collection);
         observer.complete();

         setTimeout(() => {
           this.loading.dismiss();
         });
       }).catch((error) => {
         console.log("get Storage Places Error!!!");

         this.showError(error);
         observer.error(error);
       });
     }).catch((error) => {
       console.log("error!!!=", error);
       this.showError(error);
       observer.error(error);
     });
    });
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    this.loading.present();
  }

  showError(text) {
    setTimeout(() => {
      this.loading.dismiss();
    });
    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }

}
