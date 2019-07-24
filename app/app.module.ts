import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { Tab1Page } from './pages/tab1/tab1';
import { Tab2Page } from './pages/tab2/tab2';
import { TabsPage } from './pages/tabs/tabs';
//import { AgregarPage } from './pages/agregar/agregar.page';

// servicios
import { DeseosService } from './services/deseos.service';

@NgModule({
  declarations: [
    MyApp,
    Tab2Page,
    Tab1Page,
    TabsPage 
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Tab2Page,
    Tab1Page,
    TabsPage
  ],
  providers: [DeseosService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
