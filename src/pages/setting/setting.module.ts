import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Setting } from './setting';

import { LoginModule } from '../login/login.module';
import { MyInfoModule } from '../my-info/my-info.module';
import { MyFollowModule } from '../my-follow/my-follow.module';
import { MyLikeModule } from '../my-like/my-like.module';

@NgModule({
  declarations: [
    Setting,
  ],
  imports: [
    IonicPageModule.forChild(Setting),
    LoginModule,
    MyInfoModule,
    MyFollowModule,
    MyLikeModule,
  ],
  exports: [
    Setting
  ]
})
export class SettingModule {}
