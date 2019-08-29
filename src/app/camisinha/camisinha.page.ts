import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, Platform } from '@ionic/angular';
import { QuestionPagePage } from '../question-page/question-page.page';

@Component({
  selector: 'app-camisinha',
  templateUrl: './camisinha.page.html',
  styleUrls: ['./camisinha.page.scss'],
})
export class CamisinhaPage implements OnInit {
  @ViewChild('headerTransparent') header: any;
  @ViewChild('title') title: any;
  constructor(public modalController: ModalController, public platform: Platform) { }

  ngOnInit() {
    this.header.el.style.position = "absolute";
    this.title.el.style.marginLeft = "0px";
  }

  isScroll(ev){
    if(this.platform.is('ios')){
      if(ev.detail.currentY <= 250){
        this.title.el.style.marginLeft = "0px";
        this.title.el.style.transition = "all 0.2s ease-in"
        this.title.el.style.textAlign = "start"
        this.header.el.style.position = "absolute";
        this.header.el.style.backgroundColor = "transparent";
        this.header.el.style.transition = "all 0.2s ease-in";
      }else{
        this.header.el.style.backgroundColor = "#faecee";
        this.title.el.style.marginLeft = "0px";
        this.title.el.style.display = "flow-root";
        this.title.el.style.transition = "all 0.2s ease-out";
        this.title.el.style.textAlign = "center"
      }
    }else{
      if(ev.detail.currentY <= 250){
        this.title.el.style.marginLeft = "0px";
        this.title.el.style.transition = "all 0.2s ease-in"
        this.header.el.style.position = "absolute";
        this.header.el.style.backgroundColor = "transparent";
        this.header.el.style.transition = "all 0.2s ease-in";
      }else{
        this.header.el.style.backgroundColor = "#faecee";
        this.title.el.style.marginLeft = "30px";
        this.title.el.style.transition = "all 0.2s ease-out"
      }
    }
  }

  async questionPage() {
    const modal = await this.modalController.create({
      component: QuestionPagePage,
      componentProps: {
        "page":"camisinha"
      }
    });
    return await modal.present();
  }
}
