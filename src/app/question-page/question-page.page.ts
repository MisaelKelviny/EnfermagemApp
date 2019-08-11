import { Component, OnInit, Input } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-question-page',
  templateUrl: './question-page.page.html',
  styleUrls: ['./question-page.page.scss'],
})
export class QuestionPagePage implements OnInit {

  @Input() page: string;
  typePage: any;

  questions: any = [
    {
      title: "Qual a forma de transmissão da Sífilis?",
      question:[
        "Através do beijo",
        "Através da relação sexual",
        "Ao dividir o mesmo copo"
      ],
      correta: "B"
    },
    {
      title: "A Sífilis aparece com os seguintes sintomas:",
      question: [
        "Pequenas feridas em órgãos genitais",
        "Ínguas na região da virilha",
        "Pus ou ardência",
        "Todas estão corretas"
      ],
      correta: "D"
    },
    {
      title: "Os sintomas podem desaparecer com o tempo, sendo semanas, meses ou até anos?",
      question: [
        "Verdadeiro",
        "Falso",
      ],
      correta: "A"
    },
  ]

  constructor(public modalCtrl: ModalController, public navParams: NavParams) {
    this.typePage = navParams.get('page');
  }

  ngOnInit() {
    console.log(this.questions);
    
  }

  dismiss() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

  finalizar(quest1, quest2, quest3){
    console.log(quest1 + " " + quest2 + " " + quest3 + " ");
    
  }
}
