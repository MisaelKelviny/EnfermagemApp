import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EstouComSifilisPage } from './estou-com-sifilis.page';

const routes: Routes = [
  {
    path: '',
    component: EstouComSifilisPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EstouComSifilisPage]
})
export class EstouComSifilisPageModule {}
