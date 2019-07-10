import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {
    this.changeSearchBar();
  }

  changeSearchBar(){
    // var sc = document.getElementsByTagName("ion-searchbar");
    // console.log(sc);
    
    var sc = document.getElementsByClassName("sc-ion-searchbar-md");
    console.log(sc.item(0));
    console.log(sc);
    
    
  }
}
