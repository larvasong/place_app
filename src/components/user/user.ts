import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { UserInfo } from '../../pages/user-info/user-info';
import { UserModel } from '../../models/user';

/**
 * Generated class for the User component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'user',
  templateUrl: 'user.html'
})
export class User {
  @Input() item: UserModel;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
  ) {
    console.log('Hello User Component');
  }

  viewPerson(item: UserModel) {
    console.log("viewPerson : ", item);
    this.navCtrl.push(UserInfo, { item: item });
  }

}
