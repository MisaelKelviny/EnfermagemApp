import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CreditModalPage } from '../credit-modal/credit-modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(public router: Router, 
    public modalController: ModalController) {
  }


  sifilisPage() {
    this.router.navigate(['/sifilis-page']);
  }
  fasesPage() {
    this.router.navigate(['/fases-page']);
  }
  congenitaPage() {
    this.router.navigate(['/congenita-page']);
  }


  async openCredits(){
    const modal = await this.modalController.create({
      component: CreditModalPage
    });
    return await modal.present();
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }
}