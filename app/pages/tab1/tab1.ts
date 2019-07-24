import { Component } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';

@Component({
  selector: 'page-tab1',
  templateUrl: 'tab1.html'
})
export class Tab1Page {

  constructor(public deseosService: DeseosService) {

  }

}
