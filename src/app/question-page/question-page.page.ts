import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { NavParams, ModalController, NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { ViewController } from '@ionic/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-question-page',
  templateUrl: './question-page.page.html',
  styleUrls: ['./question-page.page.scss'],
})
export class QuestionPagePage implements OnInit {

  @Input() page: string;
  typePage: any;
  question1:any
  question2:any
  question3:any

  
  constructor(public modalCtrl: ModalController,
    public navParams: NavParams,
    public alertController: AlertController,
    public router: Router,
    public nav: NavController,
    public storage: Storage,
    public cd: ChangeDetectorRef) {
    this.typePage = navParams.get('page');
  }

  ngOnInit() {
    // console.log(this.questions);

  }

  ionViewWillLeave(){
    this.cd.detectChanges();
  }

  dismiss() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });

    await alert.present();
  }

  setChapterComplete(page){
    this.storage.set("/"+page+"Check", 'true');
  }
  
  async finalizar(quest1, quest2, quest3) {

    let result: any;

    let sifilisPage: any = [{
      quest1: "B",
      quest2: "D",
      quest3: "A"
    }]

    let fasesPage: any = [{
      quest1: "D",
      quest2: "A",
      quest3: "A"
    }]

    let congenitaPage: any = [{
      quest1: "C",
      quest2: "A",
      quest3: "B"
    }]

    let tratamentoPage: any = [{
      quest1: "C",
      quest2: "B",
      quest3: "A"
    }]

    let estouSifilisPage: any = [{
      quest1: "D",
      quest2: "B"
    }]

    let prevencaoPage: any = [{
      quest1: "A",
      quest2: "B",
      quest3: "A"
    }]

    let camisinhaPage: any = [{
      quest1: "B",
      quest2: "D"
    }]

    if (this.typePage == 'sifilis-page') {
      let correta: number = 0;
      if (quest1 && quest2 && quest3) {
        for (let i = 0; i < sifilisPage.length; i++) {
          if (quest1 == sifilisPage[i].quest1) {
            correta++;
          }
          if (quest2 == sifilisPage[i].quest2) {
            correta++;
          }
          if (quest3 == sifilisPage[i].quest3) {
            correta++;
          }
          result = correta;
        }
        if (result == 0) {
          const alert = await this.alertController.create({
            message: '<img src="../assets/img/bacteria.png" class="imgSize"/> <br>' +
              '<h2>Estude mais</h2>' +
              '<br>Leia novamente este capítulo para obter melhores resultados, tente novamente!',

            buttons: ['OK']
          });

          await alert.present();
          await this.dismiss();
        }

        if (result == 1) {
          const alert = await this.alertController.create({
            message: '<img src="../assets/img/pharmacy.png" class="imgSize"/> <br>' +
              '<h2>Estude mais um pouco</h2>' +
              '<br>Leia novamente os textos sobre este tema e tente novamente!',

            buttons: ['OK']
          });

          await alert.present();
          await this.dismiss();
        }
        if (result == 2) {
          const alert = await this.alertController.create({
            message: '<img src="../assets/img/bandage.png" class="imgSize"/> <br>' +
              '<h2>Estude mais um pouco</h2>' +
              '<br>Leia novamente os textos sobre este tema e tente novamente!',

            buttons: ['OK']
          });

          await alert.present();
          await this.dismiss();
        }
        if (result == 3) {
          const alert = await this.alertController.create({
            message: '<img src="../assets/img/breastfeeding.png" class="imgSize"/> <br>' +
              '<h2>Parabéns! você sabe tudo!</h2>' +
              '<br>Muito bem, você tem dominio sobre o assunto!',

            buttons: ['OK']
          });

          await alert.present();
          await this.dismiss();
          await this.router.navigate(["home"], {replaceUrl: true});
          this.setChapterComplete('sifilis-page');
        }

      } else {
        const alert = await this.alertController.create({
          header: 'Marque Todas as opções',
          // subHeader: 'Você precisa responder todas as perguntas',
          message: 'Você precisa responder todas as perguntas antes de finalizar',
          buttons: ['OK']
        });

        await alert.present();
      }
    }

    if (this.typePage == 'fases-page') {
      let correta: number = 0;
      if (quest1 && quest2 && quest3) {
        for (let i = 0; i < fasesPage.length; i++) {
          if (quest1 == fasesPage[i].quest1) {
            correta++;
          }
          if (quest2 == fasesPage[i].quest2) {
            correta++;
          }
          if (quest3 == fasesPage[i].quest3) {
            correta++;
          }
          console.log(correta);
          result = correta;
        }

        if (result == 0) {
          const alert = await this.alertController.create({
            message: '<img src="../assets/img/bacteria.png" class="imgSize"/> <br>' +
              '<h2>Estude mais</h2>' +
              '<br>Leia novamente este capítulo para obter melhores resultados, tente novamente!',

            buttons: ['OK']
          });

          await alert.present();
          await this.dismiss();
        }

        if (result == 1) {
          const alert = await this.alertController.create({
            message: '<img src="../assets/img/pharmacy.png" class="imgSize"/> <br>' +
              '<h2>Estude mais um pouco</h2>' +
              '<br>Leia novamente os textos sobre este tema e tente novamente!',

            buttons: ['OK']
          });

          await alert.present();
          await this.dismiss();
        }
        if (result == 2) {
          const alert = await this.alertController.create({
            message: '<img src="../assets/img/bandage.png" class="imgSize"/> <br>' +
              '<h2>Estude mais um pouco</h2>' +
              '<br>Leia novamente os textos sobre este tema e tente novamente!',

            buttons: ['OK']
          });

          await alert.present();
          await this.dismiss();
        }
        if (result == 3) {
          const alert = await this.alertController.create({
            message: '<img src="../assets/img/breastfeeding.png" class="imgSize"/> <br>' +
              '<h2>Parabéns! você sabe tudo!</h2>' +
              '<br>Muito bem, você tem dominio sobre o assunto!',

            buttons: ['OK']
          });

          await alert.present();
          await this.dismiss();
          await this.router.navigate(["home"]);
          this.setChapterComplete('fases-page');
        }

      } else {
        const alert = await this.alertController.create({
          header: 'Marque Todas as opções',
          // subHeader: 'Você precisa responder todas as perguntas',
          message: 'Você precisa responder todas as perguntas antes de finalizar',
          buttons: ['OK']
        });

        await alert.present();
      }
    }

    if (this.typePage == 'congenita-page') {
      let correta: number = 0;
      if (quest1 && quest2 && quest3) {
        for (let i = 0; i < congenitaPage.length; i++) {
          if (quest1 == congenitaPage[i].quest1) {
            correta++;
          }
          if (quest2 == congenitaPage[i].quest2) {
            correta++;
          }
          if (quest3 == congenitaPage[i].quest3) {
            correta++;
          }
          console.log(correta);
          result = correta;
        }
        if (result == 0) {
          const alert = await this.alertController.create({
            message: '<img src="../assets/img/bacteria.png" class="imgSize"/> <br>' +
              '<h2>Estude mais</h2>' +
              '<br>Leia novamente este capítulo para obter melhores resultados, tente novamente!',

            buttons: ['OK']
          });

          await alert.present();
          await this.dismiss();
        }

        if (result == 1) {
          const alert = await this.alertController.create({
            message: '<img src="../assets/img/pharmacy.png" class="imgSize"/> <br>' +
              '<h2>Estude mais um pouco</h2>' +
              '<br>Leia novamente os textos sobre este tema e tente novamente!',

            buttons: ['OK']
          });

          await alert.present();
          await this.dismiss();
        }
        if (result == 2) {
          const alert = await this.alertController.create({
            message: '<img src="../assets/img/bandage.png" class="imgSize"/> <br>' +
              '<h2>Estude mais um pouco</h2>' +
              '<br>Leia novamente os textos sobre este tema e tente novamente!',

            buttons: ['OK']
          });

          await alert.present();
          await this.dismiss();
        }
        if (result == 3) {
          const alert = await this.alertController.create({
            message: '<img src="../assets/img/breastfeeding.png" class="imgSize"/> <br>' +
              '<h2>Parabéns! você sabe tudo!</h2>' +
              '<br>Muito bem, você tem dominio sobre o assunto!',

            buttons: ['OK']
          });

          await alert.present();
          await this.dismiss();
          await this.router.navigate(["home"]);
          this.setChapterComplete('congenita-page');
        }
      } else {
        const alert = await this.alertController.create({
          header: 'Marque Todas as opções',
          // subHeader: 'Você precisa responder todas as perguntas',
          message: 'Você precisa responder todas as perguntas antes de finalizar',
          buttons: ['OK']
        });

        await alert.present();
      }
    }

    if (this.typePage == 'tratamento-page') {
      let correta: number = 0;
      if (quest1 && quest2 && quest3) {
        for (let i = 0; i < tratamentoPage.length; i++) {
          if (quest1 == tratamentoPage[i].quest1) {
            correta++;
          }
          if (quest2 == tratamentoPage[i].quest2) {
            correta++;
          }
          if (quest3 == tratamentoPage[i].quest3) {
            correta++;
          }
          console.log(correta);
          result = correta;
        }
        if (result == 0) {
          const alert = await this.alertController.create({
            message: '<img src="../assets/img/bacteria.png" class="imgSize"/> <br>' +
              '<h2>Estude mais</h2>' +
              '<br>Leia novamente este capítulo para obter melhores resultados, tente novamente!',

            buttons: ['OK']
          });

          await alert.present();
          await this.dismiss();
        }

        if (result == 1) {
          const alert = await this.alertController.create({
            message: '<img src="../assets/img/pharmacy.png" class="imgSize"/> <br>' +
              '<h2>Estude mais um pouco</h2>' +
              '<br>Leia novamente os textos sobre este tema e tente novamente!',

            buttons: ['OK']
          });

          await alert.present();
          await this.dismiss();
        }
        if (result == 2) {
          const alert = await this.alertController.create({
            message: '<img src="../assets/img/bandage.png" class="imgSize"/> <br>' +
              '<h2>Estude mais um pouco</h2>' +
              '<br>Leia novamente os textos sobre este tema e tente novamente!',

            buttons: ['OK']
          });

          await alert.present();
          await this.dismiss();
        }
        if (result == 3) {
          const alert = await this.alertController.create({
            message: '<img src="../assets/img/breastfeeding.png" class="imgSize"/> <br>' +
              '<h2>Parabéns! você sabe tudo!</h2>' +
              '<br>Muito bem, você tem dominio sobre o assunto!',

            buttons: ['OK']
          });

          await alert.present();
          await this.dismiss();
          await this.router.navigate(["home"])
          this.setChapterComplete('tratamento-page');
        }
      } else {
        const alert = await this.alertController.create({
          header: 'Marque Todas as opções',
          // subHeader: 'Você precisa responder todas as perguntas',
          message: 'Você precisa responder todas as perguntas antes de finalizar',
          buttons: ['OK']
        });

        await alert.present();
      }
    }

    if (this.typePage == 'estou-com-sifilis') {
      let correta: number = 0;
      if (quest1 && quest2) {
        for (let i = 0; i < estouSifilisPage.length; i++) {
          if (quest1 == estouSifilisPage[i].quest1) {
            correta++;
          }
          if (quest2 == estouSifilisPage[i].quest2) {
            correta++;
          }
          console.log(correta);
          result = correta;
        }
        if (result == 0) {
          const alert = await this.alertController.create({
            message: '<img src="../assets/img/bacteria.png" class="imgSize"/> <br>' +
              '<h2>Estude mais</h2>' +
              '<br>Leia novamente este capítulo para obter melhores resultados, tente novamente!',

            buttons: ['OK']
          });

          await alert.present();
          await this.dismiss();
        }

        if (result == 1) {
          const alert = await this.alertController.create({
            message: '<img src="../assets/img/pharmacy.png" class="imgSize"/> <br>' +
              '<h2>Estude mais um pouco</h2>' +
              '<br>Leia novamente os textos sobre este tema e tente novamente!',

            buttons: ['OK']
          });

          await alert.present();
          await this.dismiss();
        }
        if (result == 2) {
          const alert = await this.alertController.create({
            message: '<img src="../assets/img/breastfeeding.png" class="imgSize"/> <br>' +
              '<h2>Parabéns! você sabe tudo!</h2>' +
              '<br>Muito bem, você tem dominio sobre o assunto!',

            buttons: ['OK']
          });

          await alert.present();
          await this.dismiss();
          await this.router.navigate(["home"])
          this.setChapterComplete('estou-com-sifilis');
        }
      } else {
        const alert = await this.alertController.create({
          header: 'Marque Todas as opções',
          // subHeader: 'Você precisa responder todas as perguntas',
          message: 'Você precisa responder todas as perguntas antes de finalizar',
          buttons: ['OK']
        });

        await alert.present();
      }
    }

    if (this.typePage == 'prevencao') {
      let correta: number = 0;
      if (quest1 && quest2 && quest3) {
        for (let i = 0; i < prevencaoPage.length; i++) {
          if (quest1 == prevencaoPage[i].quest1) {
            correta++;
          }
          if (quest2 == prevencaoPage[i].quest2) {
            correta++;
          }
          if (quest3 == prevencaoPage[i].quest3) {
            correta++;
          }
          console.log(correta);
          result = correta;
        }
        if (result == 0) {
          const alert = await this.alertController.create({
            message: '<img src="../assets/img/bacteria.png" class="imgSize"/> <br>' +
              '<h2>Estude mais</h2>' +
              '<br>Leia novamente este capítulo para obter melhores resultados, tente novamente!',

            buttons: ['OK']
          });

          await alert.present();
          await this.dismiss();
        }

        if (result == 1) {
          const alert = await this.alertController.create({
            message: '<img src="../assets/img/pharmacy.png" class="imgSize"/> <br>' +
              '<h2>Estude mais um pouco</h2>' +
              '<br>Leia novamente os textos sobre este tema e tente novamente!',

            buttons: ['OK']
          });

          await alert.present();
          await this.dismiss();
        }
        if (result == 2) {
          const alert = await this.alertController.create({
            message: '<img src="../assets/img/bandage.png" class="imgSize"/> <br>' +
              '<h2>Estude mais um pouco</h2>' +
              '<br>Leia novamente os textos sobre este tema e tente novamente!',

            buttons: ['OK']
          });

          await alert.present();
          await this.dismiss();
        }
        if (result == 3) {
          const alert = await this.alertController.create({
            message: '<img src="../assets/img/breastfeeding.png" class="imgSize"/> <br>' +
              '<h2>Parabéns! você sabe tudo!</h2>' +
              '<br>Muito bem, você tem dominio sobre o assunto!',

            buttons: ['OK']
          });

          await alert.present();
          await this.dismiss();
          await this.router.navigate(["home"])
          this.setChapterComplete('prevencao');
        }
      } else {
        const alert = await this.alertController.create({
          header: 'Marque Todas as opções',
          // subHeader: 'Você precisa responder todas as perguntas',
          message: 'Você precisa responder todas as perguntas antes de finalizar',
          buttons: ['OK']
        });

        await alert.present();
      }
    }

    if (this.typePage == 'camisinha') {
      let correta: number = 0;
      if (quest1 && quest2) {
        for (let i = 0; i < camisinhaPage.length; i++) {
          if (quest1 == camisinhaPage[i].quest1) {
            correta++;
          }
          if (quest2 == camisinhaPage[i].quest2) {
            correta++;
          }
          console.log(correta);
          result = correta;
        }
        if (result == 0) {
          const alert = await this.alertController.create({
            message: '<img src="../assets/img/bacteria.png" class="imgSize"/> <br>' +
              '<h2>Estude mais</h2>' +
              '<br>Leia novamente este capítulo para obter melhores resultados, tente novamente!',

            buttons: ['OK']
          });

          await alert.present();
          await this.dismiss();
        }

        if (result == 1) {
          const alert = await this.alertController.create({
            message: '<img src="../assets/img/pharmacy.png" class="imgSize"/> <br>' +
              '<h2>Estude mais um pouco</h2>' +
              '<br>Leia novamente os textos sobre este tema e tente novamente!',

            buttons: ['OK']
          });

          await alert.present();
          await this.dismiss();
        }
        if (result == 2) {
          const alert = await this.alertController.create({
            message: '<img src="../assets/img/breastfeeding.png" class="imgSize"/> <br>' +
              '<h2>Parabéns! você sabe tudo!</h2>' +
              '<br>Muito bem, você tem dominio sobre o assunto!',

            buttons: ['OK']
          });

          await alert.present();
          await this.dismiss();
          await this.router.navigate(["home"])
          this.setChapterComplete('camisinha');
        }
      } else {
        const alert = await this.alertController.create({
          header: 'Marque Todas as opções',
          // subHeader: 'Você precisa responder todas as perguntas',
          message: 'Você precisa responder todas as perguntas antes de finalizar',
          buttons: ['OK']
        });

        await alert.present();
      }
    }

  }
}
