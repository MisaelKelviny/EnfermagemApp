import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CreditModalPage } from './credit-modal/credit-modal.page';
import { AppCustomPreloaderService } from './app-custom-preloader.service';
import { QuestionPagePage } from './question-page/question-page.page';
import { FormsModule } from '@angular/forms';
import { CreditModalPageModule } from './credit-modal/credit-modal.module';
import { QuestionPagePageModule } from './question-page/question-page.module';
import { IonicStorageModule } from '@ionic/storage';
import { CustomersModule } from './customers/customers.module';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [
    CreditModalPage,
    QuestionPagePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    IonicStorageModule.forRoot(),
    CreditModalPageModule,
    QuestionPagePageModule,
    CustomersModule,
  ],
  providers: [
    AppCustomPreloaderService,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
