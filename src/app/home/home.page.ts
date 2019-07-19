import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public router: Router) {
  }

  sifilisPage(){
    this.router.navigate(['/sifilis-page']);
  }

  fasesPage(){
    this.router.navigate(['/fases-page']);
  }
}
