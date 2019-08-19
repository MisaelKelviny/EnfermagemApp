import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CreditModalPage } from './credit-modal/credit-modal.page';
import { AppCustomPreloaderService } from './app-custom-preloader.service';
import { QuestionPagePage } from './question-page/question-page.page';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, CreditModalPage,QuestionPagePage],
  entryComponents: [
    CreditModalPage,
    QuestionPagePage
  ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule],
  providers: [
    StatusBar,
    SplashScreen,
    AppCustomPreloaderService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
