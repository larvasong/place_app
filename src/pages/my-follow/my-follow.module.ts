import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyFollow } from './my-follow';

import { UserInfoModule } from '../user-info/user-info.module';


@NgModule({
  declarations: [
    MyFollow,
  ],
  imports: [
    IonicPageModule.forChild(MyFollow),
    UserInfoModule,
  ],
  exports: [
    MyFollow
  ]
})
export class MyFollowModule {}
