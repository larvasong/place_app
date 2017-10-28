import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

import { File } from '@ionic-native/file';
import { Transfer } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
// import { Camera } from '@ionic-native/camera';

import { PlaceModel } from '../../models/place';

import { PlaceService } from '../../providers/place-service';

// declare var cordova:any;
declare var navigator:any;


/**
 * Generated class for the Write page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-write',
  templateUrl: 'write.html',
})
export class Write {
  placeItem: PlaceModel = new PlaceModel();
  correctPath:string;
  currentName:string;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public placeservice: PlaceService,
    public platform: Platform,
    public zone: NgZone,
    // private camera: Camera,
    private file: File,
    private transfer: Transfer,
    private filePath: FilePath,
  ) {

      // Geolocation.getCurrentPosition().then((resp) => {
      //  // resp.coords.latitude
      //  // resp.coords.longitude
      //  console.log(JSON.stringify(resp));
      // }).catch((error) => {
      //   console.log('Error getting location', error);
      // });

      // let watch = Geolocation.watchPosition();
      // watch.subscribe((data) => {
      //  // data can be a set of coordinates, or an error (if an error occurred).
      //  // data.coords.latitude
      //  // data.coords.longitude
      //  alert("watch : " + data);
      // });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WritePage');
  }


  // public createDirectory() {
  //   this.file.checkDir(this.file.dataDirectory, 'mydir')
  //   .then(_ => {
  //     console.log('Directory exists', _);
  //
  //   })
  //   .catch(err => {
  //     console.log('Directory doesnt exist', err);
  //     this.file.createDir(this.file.dataDirectory, 'mydir', false);
  //   } );
  // }
  //
  // public getFileList() {
  //   this.file.listDir(this.file.dataDirectory, 'mydir')
  //   .then((list) => {
  //     console.dir(list);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  // }


  private createFileName() {
    var date = new Date(),
    name = date.getTime(),
    newFileName =  name + ".jpg";
    return newFileName;
  }


  // Copy the image to a local folder
  private copyFileToLocalDir(namePath, currentName, newFileName) {
    this.file.copyFile(namePath, currentName, this.file.dataDirectory, newFileName).then(success => {
      this.placeItem.images = this.file.dataDirectory+newFileName;
    }, error => {
      console.log("error");
    });
  }


  public save() {
    this.copyFileToLocalDir(this.correctPath, this.currentName, this.createFileName());

    this.placeservice.save(this.placeItem).subscribe((value)=>{
      // todo init variables
      // this.zone.run(()=>{
      // });
      // alert(value);
      if(value) {
        // this.refresh();
        // this.placeItem.images = null;
        this.placeItem = new PlaceModel();
        // alert(this.placeItem.images);
        this.correctPath = "";
        this.currentName = "";
      }
    });
  }


  // get picture from gallery or camera
  private getPictureImage(source) {
    let PictureSourceType, DestinationType;
    if (source=="gallery") {
      PictureSourceType = navigator.camera.PictureSourceType.PHOTOLIBRARY;
      DestinationType = navigator.camera.DestinationType.FILE_URI;
    } else if (source=="camera") {
      PictureSourceType = navigator.camera.PictureSourceType.CAMERA;
      DestinationType = navigator.camera.DestinationType.FILE_URI;
    }

    var cameraConfig = {
      quality : 50,
      destinationType : DestinationType,
      sourceType : PictureSourceType,
      encodingType: navigator.camera.EncodingType.JPEG,
      saveToPhotoAlbum: true,
      correctOrientation: true,
    };

    navigator.camera.getPicture((result) => {
    // this.camera.getPicture(cameraConfig).then((result) => {
      var thisResult = JSON.parse(result);
      var metadata = JSON.parse(thisResult.json_metadata);
      var imagePath = thisResult.filename;
      var latitude, longitude;

      if(thisResult.json_metadata == "{}") {
        return;
      }

      if (this.platform.is('ios')) {
        var lastIdx = imagePath.lastIndexOf('/') + 1;
        this.correctPath = imagePath.substr(0, lastIdx);
        this.currentName = imagePath.substr(lastIdx);
        this.placeItem.images = this.correctPath + this.currentName;
      }
      else if (this.platform.is('android')){
        this.filePath.resolveNativePath(imagePath)
        .then(filePath => {
          var lastIdx = filePath.lastIndexOf('/') + 1;
          this.correctPath = filePath.substr(0, lastIdx);
          this.currentName = filePath.substring(lastIdx, filePath.lastIndexOf('?'));
          // if (filePath.lastIndexOf('?') > 0) {
          //   this.currentName = filePath.substring(lastIdx, filePath.lastIndexOf('?'));
          // } else {
          //   this.currentName = filePath.substr(lastIdx);
          // }
          this.placeItem.images = this.correctPath + this.currentName;
        });
      }


      // get gps coordinates
      if (this.platform.is('ios')) {
        console.log('ios');
        console.log("latitude=", metadata.GPS.Latitude);
        console.log("longitude=", metadata.GPS.Longitude);
        console.log("altitude=", metadata.GPS.Altitude);
        console.log("dateStamp=", metadata.GPS.DateStamp);
        console.log("timeStamp=", metadata.GPS.TimeStamp);
        latitude = metadata.GPS.Latitude;
        longitude = metadata.GPS.Longitude;
      }
      else if (this.platform.is('android')){
        console.log('android');
        console.log("latitude=" + metadata.gpsLatitude);
        console.log("longitude=" + metadata.gpsLongitude);
        console.log("altitude=" + metadata.gpsAltitude);
        console.log("dateStamp=" + metadata.gpsDateStamp);
        console.log("timeStamp=" + metadata.gpsTimeStamp);
        latitude = metadata.gpsLatitude;
        longitude = metadata.gpsLongitude;
      }

      if (latitude.indexOf(",") > 0) {
        latitude = this.gpsConvert(latitude);
      }
      if (longitude.indexOf(",") > 0) {
        longitude = this.gpsConvert(longitude);
      }

      this.placeItem.latitude = latitude;
      this.placeItem.longitude = longitude;
    }, (errorMessage) => {
      console.log("fail==", errorMessage);
    }, cameraConfig );
  }

  // gps convert 도분초 -> 도
  public gpsConvert(coord) {
    var rslt = coord.split(",");
    var deg:number = parseFloat(rslt[0]); // 도
    var bun:number = parseFloat(rslt[1]); // 분
    var cho:number = parseFloat(rslt[2]); // 초
    cho = parseFloat((cho/60).toFixed(3));
    bun = parseFloat(((bun + cho)/60).toFixed(5));
    rslt = deg + bun;
    return rslt;
  }

  public accessGallery() {
    console.log("accessGallery");
    this.getPictureImage('gallery');
  }

  public accessCamera() {
    console.log("accessGallery");
    this.getPictureImage('camera');
  }

}
