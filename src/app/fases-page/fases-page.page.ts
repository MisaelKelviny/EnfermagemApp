import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-fases-page',
  templateUrl: './fases-page.page.html',
  styleUrls: ['./fases-page.page.scss'],
})
export class FasesPagePage implements OnInit {
  // variável que pega o element header para poder transformar ele em transparente quando o app iniciar
  @ViewChild('headerTransparent') header: any; 
  
  //variável que pega o titulo da página para poder manipular com o inicio do aplicativo.
  @ViewChild('title') title: any; 
  constructor() { }

  //método da interface OnInit que foi implementada, nela a função inicializa junto ao aplicativo e inicia todas as propriedades
  //e variáveis
  ngOnInit() {
    //a variável do element header altera o seu estilo para position absolute a mesma fica flutuando na página.
    this.header.el.style.position = "absolute";
    //a variável do element titulo recebe a margem a esquerda em 0px; não sei porq, mas é isso que eu fiz e nao lembro
    //lembrei a titulo recebe margin left para que quando iniciado a margin seja 0px e depois quando houver 
    //o scroll a mesma recebe 30px da esquerda. criando o efeito
    this.title.el.style.marginLeft = "0px";
  }

  //método que pega o evento de scroll da página  a mesma é ativada por uma diretiva nativa ionScroll
  isScroll(ev){
    //se o scroll na eixo cartesiano Y for menor que 250px o mesmo ativa as propriedades necessarias no css
    //o mesmo ativa as propriedades no titulo e no header
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
