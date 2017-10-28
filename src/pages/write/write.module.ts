import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Write } from './write';

@NgModule({
  declarations: [
    Write,
  ],
  imports: [
    IonicPageModule.forChild(Write),
  ],
  exports: [
    Write
  ]
})
export class WriteModule {}
