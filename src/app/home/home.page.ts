import { Component, ViewChild, ChangeDetectorRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CreditModalPage } from '../credit-modal/credit-modal.page';
import { Storage } from '@ionic/storage';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Content } from '@angular/compiler/src/render3/r3_ast';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  
  check: boolean = false;
  pageCheck: any;
  cardMenu: any;
  @ViewChild('menuList') menuList: any;
  searchbar: any = ""; // searchbar 
  encontradas: any; // variavel para incrementar e auxiliar na lista de busca do search
  
  //objeto para a construção do menu. ele contém os elementos de cada card da tela inicial
  //para adicionar as pages nos elementos precisa criar as páginas primeiro e depois adicionar o 
  //path na página de app-routeing.module
  
  
  
  
  constructor(public router: Router,
    public modalController: ModalController,
  private storage: Storage,
  private sqlite: SQLite,
  public cd: ChangeDetectorRef) {
    
  }
  
  ngOnInit(): void {
    this.cardMenu = [{
      pages: "/sifilis-page",
      titles: "Sífilis",
      subtitle: "Vamos começar falando sobre a Sífilis adquirida.",
      url: "../../assets/img/menu01.svg",
      imageName: "image00",
      checked: false
    },
    {
      pages: "/fases-page",
      titles: "Fases da Sífilis",
      subtitle: "É importante saber que existe diferentes fases da evolução da sífilis.",
      url: "../../assets/img/menu04.svg",
      imageName: "image01",
      checked: false
    },
    {
      pages: "/congenita-page",
      titles: "Sífilis Congênita",
      subtitle: "Uma doença congênita é aquela adquirida durante a gestação.",
      url: "../../assets/img/menu02.svg",
      imageName: "image02",
      checked: false
    },
    {
      pages: "/tratamento-page",
      titles: "Tratamento",
      subtitle: "Evitar a transmissão entre parceiros consequentemente evita a transmissão",
      url: "../../assets/img/menu007.png",
      imageName: "image03",
      checked: false
    },
    {
      pages: "/estou-com-sifilis",
      titles: "Como saber se estou com Sífilis?",
      subtitle: "Ao verificar que há sintomas iguais",
      url: "../../assets/img/menu05.svg",
      imageName: "image04",
      checked: false
    },
    {
      pages: "/prevencao",
      titles: "Prevenção",
      subtitle: "Como se trata de uma infecção transmitida pela relação sexual",
      url: "../../assets/img/menu06.svg",
      imageName: "image05",
      checked: false
    },
    {
      pages: "/camisinha",
      titles: "Camisinha",
      subtitle: "É o método de prevenção mais eficaz não só da sífilis",
      url: "../../assets/img/menu08.svg",
      imageName: "image06",
      checked: false
    }
  ]

  this.encontradas = this.cardMenu;
  }

  ionViewWillEnter() {
    this.cd.detectChanges();
    this.ngOnInit();
    this.getChapterCheck();
  }



  getChapterCheck() {
    // this.cardMenu[i].checked = false;
    for (let j = 0; j < this.cardMenu.length; j++) {
      this.storage.get(this.cardMenu[j].pages + "Check").then((val) => {
        for (let i = 0; i < this.cardMenu.length; i++) {
          this.cd.detectChanges();
          if (this.cardMenu[i].pages + "Check" == this.cardMenu[j].pages + "Check" && val) {
            this.cardMenu[i].checked = true;
          } else {
            this.cardMenu[i].check = false;
          }
        }
      });
    }
  }
  //função para abrir a página clicada no menu inicial, o atributo que ela recebe faz parte da
  //lista na qual foi clicada
  openPage(page) {
    this.router.navigate([page]);
    this.cd.detectChanges();
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
    this.cd.detectChanges();
  }

  search(e: any) {
    const val = e.target.value;
    if (val && val.trim != "") {
      this.cardMenu = this.cardMenu.filter((page) => {
        return (page.titles.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
      document.getElementById("credito").style.display = "none";
    } else {
      this.cardMenu = this.encontradas;
      document.getElementById("credito").style.display = "block";
    }
    this.cd.detectChanges();
  }
}