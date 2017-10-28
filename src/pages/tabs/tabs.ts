import { Component } from '@angular/core';

import { Home } from '../home/home';
import { Search } from '../search/search';
import { Write } from '../write/write';
import { Setting } from '../setting/setting';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = Home;
  tab2Root: any = Search;
  tab3Root: any = Write;
  tab4Root: any = Setting;

  constructor() {

  }
}
