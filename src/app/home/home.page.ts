import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CreditModalPage } from '../credit-modal/credit-modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild('menuList') menuList: any;
  searchbar: any = ""; // searchbar 

  //objeto para a construção do menu. ele contém os elementos de cada card da tela inicial
  //para adicionar as pages nos elementos precisa criar as páginas primeiro e depois adicionar o 
  //path na página de app-routeing.module
  cardMenu: any = [{
    pages: "/sifilis-page",
    titles: "Sífilis",
    subtitle: "Vamos começar falando sobre a Sífilis adquirida.",
    url: "../../assets/img/menu01.svg",
    imageName: "image00"
  },
  {
    pages: "/fases-page",
    titles: "Fases da Sífilis",
    subtitle: "É importante saber que existe diferentes fases da evolução da sífilis.",
    url: "../../assets/img/menu04.svg",
    imageName: "image01"
  },
  {
    pages: "/congenita-page",
    titles: "Sífilis Congênita",
    subtitle: "Uma doença congênita é aquela adquirida durante a gestação.",
    url: "../../assets/img/menu02.svg",
    imageName: "image02"
  },
  {
    pages: "",
    titles: "Tratamento",
    subtitle: "Evitar a transmissão entre parceiros consequentemente evita a transmissão",
    url: "../../assets/img/menu07.svg",
    imageName: "image03"
  },
  {
    pages: "",
    titles: "Como saber se estou com Sífilis?",
    subtitle: "Ao verificar que há sintomas iguais",
    url: "../../assets/img/menu05.svg",
    imageName: "image04"
  },
  {
    pages: "",
    titles: "Prevenção",
    subtitle: "Como se trata de uma infecção transmitida pela relação sexual",
    url: "../../assets/img/menu06.svg",
    imageName: "image05"
  },
  {
    pages: "",
    titles: "Camisinha",
    subtitle: "É o método de prevenção mais eficaz não só da sífilis",
    url: "../../assets/img/menu08.svg",
    imageName: "image06"
  }
  ]

  encontradas: any = this.cardMenu; // variavel para incrementar e auxiliar na lista de busca do search

  constructor(public router: Router,
    public modalController: ModalController) {
  }

  //função para abrir a página clicada no menu inicial, o atributo que ela recebe faz parte da
  //lista na qual foi clicada
  openPage(page) {
    this.router.navigate([page]);
  }

  //função para abrir o modal da página de creditos! este é modal e não página
  async openCredits() {
    const modal = await this.modalController.create({
      component: CreditModalPage
    });
    return await modal.present();
  }

  //função que fecha o modal de creditos
  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  search(e: any) {
    const val = e.target.value;
    if (val && val.trim != "") {
      this.cardMenu = this.cardMenu.filter((page) => {
        return (page.titles.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    } else {
      this.cardMenu = this.encontradas;
    }
  }
}