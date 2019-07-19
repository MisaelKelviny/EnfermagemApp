import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-fases-page',
  templateUrl: './fases-page.page.html',
  styleUrls: ['./fases-page.page.scss'],
})
export class FasesPagePage implements OnInit {
  @ViewChild('headerTransparent') header: any;
  constructor() { }

  ngOnInit() {
    this.header.el.style.position = "absolute";
    console.log(this.header);
    
  }

  isScroll(ev){
    if(ev.detail.currentY <= 120){
      this.header.el.style.position = "absolute";
      this.header.el.style.backgroundColor = "transparent";
      this.header.el.style.transition = "all 0.2s ease-in";
    }else{
      this.header.el.style.backgroundColor = "#faecee";
    }
  }

}
