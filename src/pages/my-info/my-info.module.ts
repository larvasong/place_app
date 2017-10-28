import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyInfo } from './my-info';

@NgModule({
  declarations: [
    MyInfo,
  ],
  imports: [
    IonicPageModule.forChild(MyInfo),
  ],
  exports: [
    MyInfo
  ]
})
export class MyInfoModule {}
