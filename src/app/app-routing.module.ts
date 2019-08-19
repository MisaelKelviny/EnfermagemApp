import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppCustomPreloaderService } from './app-custom-preloader.service';
import { AppRoutingPreloaderService } from './app-routing-preloader.service';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule', data: {preload: true} },
  { path: 'sifilis-page', loadChildren: './sifilis-page/sifilis-page.module#SifilisPagePageModule', data: {preload: true}},
  { path: 'fases-page', loadChildren: './fases-page/fases-page.module#FasesPagePageModule', data: {preload: true} },
  { path: 'congenita-page', loadChildren: './congenita-page/congenita-page.module#CongenitaPagePageModule', data: {preload: true} },
  { path: 'credit-modal', loadChildren: './credit-modal/credit-modal.module#CreditModalPageModule', data: {preload: true} },
  { path: 'tratamento-page', loadChildren: './tratamento-page/tratamento-page.module#TratamentoPagePageModule', data: {preload: true} },
  { path: 'estou-com-sifilis', loadChildren: './estou-com-sifilis/estou-com-sifilis.module#EstouComSifilisPageModule', data: {preload: true} },
  { path: 'prevencao', loadChildren: './prevencao/prevencao.module#PrevencaoPageModule', data: {preload: true} },
  { path: 'camisinha', loadChildren: './camisinha/camisinha.module#CamisinhaPageModule', data: {preload: true} },
  { path: 'question-page', loadChildren: './question-page/question-page.module#QuestionPagePageModule', data: {preload: true} }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes,  { preloadingStrategy: AppRoutingPreloaderService })],
  exports: [RouterModule],
  providers: [AppRoutingPreloaderService]
})
export class AppRoutingModule { }
