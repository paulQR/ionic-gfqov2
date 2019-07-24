import { Component } from '@angular/core';

import { Tab2Page } from '../tab2/tab2';
import { Tab1Page } from '../tab1/tab1';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = Tab1Page;
  tab2Root = Tab2Page;

  constructor() {

  }
}
