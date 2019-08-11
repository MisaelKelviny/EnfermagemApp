import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppCustomPreloaderService } from './app-custom-preloader.service';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'sifilis-page', loadChildren: './sifilis-page/sifilis-page.module#SifilisPagePageModule'},
  { path: 'fases-page', loadChildren: './fases-page/fases-page.module#FasesPagePageModule' },
  { path: 'congenita-page', loadChildren: './congenita-page/congenita-page.module#CongenitaPagePageModule' },
  { path: 'credit-modal', loadChildren: './credit-modal/credit-modal.module#CreditModalPageModule' },  { path: 'tratamento-page', loadChildren: './tratamento-page/tratamento-page.module#TratamentoPagePageModule' },
  { path: 'estou-com-sifilis', loadChildren: './estou-com-sifilis/estou-com-sifilis.module#EstouComSifilisPageModule' },
  { path: 'prevencao', loadChildren: './prevencao/prevencao.module#PrevencaoPageModule' },
  { path: 'camisinha', loadChildren: './camisinha/camisinha.module#CamisinhaPageModule' }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes,  { preloadingStrategy: AppCustomPreloaderService })],
  exports: [RouterModule],
  providers: [AppCustomPreloaderService]
})
export class AppRoutingModule { }
