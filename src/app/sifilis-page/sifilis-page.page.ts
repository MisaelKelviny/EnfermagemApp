import { Component, OnInit, ViewChild, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-sifilis-page',
  templateUrl: './sifilis-page.page.html',
  styleUrls: ['./sifilis-page.page.scss'],
})
export class SifilisPagePage implements OnInit {

  @ViewChild('headerTransparent') header: any;

  constructor(public render: Renderer2) { }

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
