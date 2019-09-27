import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor() {
    // this.initializeApp();
  }

  // initializeApp() {
  //   this.platform.ready().then(() => {
  //     //altera o statusBar do aplicativo e do webview quando iniciado
  //     this.statusBar.overlaysWebView(false);
  //     this.statusBar.backgroundColorByHexString('#faecee');
  //     this.splashScreen.hide();
  //   });
  // }
}
