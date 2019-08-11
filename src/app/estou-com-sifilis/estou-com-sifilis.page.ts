import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-estou-com-sifilis',
  templateUrl: './estou-com-sifilis.page.html',
  styleUrls: ['./estou-com-sifilis.page.scss'],
})
export class EstouComSifilisPage implements OnInit {
  @ViewChild('headerTransparent') header: any;
  @ViewChild('title') title: any;
  constructor() { }

  ngOnInit() {
    this.header.el.style.position = "absolute";
    this.title.el.style.marginLeft = "0px";
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

}