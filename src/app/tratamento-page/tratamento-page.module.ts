import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TratamentoPagePage } from './tratamento-page.page';

const routes: Routes = [
  {
    path: '',
    component: TratamentoPagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TratamentoPagePage]
})
export class TratamentoPagePageModule {}
