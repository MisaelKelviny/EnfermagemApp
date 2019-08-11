import { Component, OnInit, ViewChild, Renderer2 } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { QuestionPagePage } from '../question-page/question-page.page';

@Component({
  selector: 'app-sifilis-page',
  templateUrl: './sifilis-page.page.html',
  styleUrls: ['./sifilis-page.page.scss'],
})
export class SifilisPagePage implements OnInit {

  @ViewChild('headerTransparent') header: any;
  @ViewChild('title') title: any;
  constructor(public modalController: ModalController) { }

  ngOnInit() {
    this.header.el.style.position = "absolute";
    this.title.el.style.marginLeft = "0px";
    console.log(this.title); 
  }

  isScroll(ev){
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

  async questionPage() {
    const modal = await this.modalController.create({
      component: QuestionPagePage,
      componentProps: {
        "page":"sifilis-page"
      }

    });
    return await modal.present();
  }
}
