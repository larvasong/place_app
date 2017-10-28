import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Home } from './home';

// component
import { PlaceModule } from '../../components/place/place.module'


@NgModule({
  declarations: [
    Home,
  ],
  imports: [
    IonicPageModule.forChild(Home),
    PlaceModule,
  ],
  exports: [
    Home
  ]
})
export class HomeModule {}
