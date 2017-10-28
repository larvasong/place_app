import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';
import { File } from '@ionic-native/file';
import { Transfer } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';

import { TabsPage } from '../pages/tabs/tabs';
// tab page
import { HomeModule } from '../pages/home/home.module';
import { SearchModule } from '../pages/search/search.module';
import { WriteModule } from '../pages/write/write.module';
import { SettingModule } from '../pages/setting/setting.module';
import { LoginModule } from '../pages/login/login.module';
import { RegisterModule } from '../pages/register/register.module';
import { MyInfoModule } from '../pages/my-info/my-info.module';
import { MyFollowModule } from '../pages/my-follow/my-follow.module';
import { MyLikeModule } from '../pages/my-like/my-like.module';
import { PlaceInfoModule } from '../pages/place-info/place-info.module';
import { UserInfoModule } from '../pages/user-info/user-info.module';

// providers
import { AuthService } from '../providers/auth-service';
import { PlaceService } from '../providers/place-service';


@NgModule({

  declarations: [
    TabsPage,
    MyApp,
  ],

  entryComponents: [
    TabsPage,
    MyApp,
  ],
  imports: [
    HomeModule,
    SearchModule,
    WriteModule,
    SettingModule,
    LoginModule,
    RegisterModule,
    MyInfoModule,
    MyFollowModule,
    MyLikeModule,
    PlaceInfoModule,
    UserInfoModule,

    BrowserModule,
    HttpModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],

  providers: [
    StatusBar,
    SplashScreen,

    File,
    Transfer,
    FilePath,
    Camera,

    AuthService,
    PlaceService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
