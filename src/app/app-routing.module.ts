import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'sifilis-page', loadChildren: './sifilis-page/sifilis-page.module#SifilisPagePageModule'},
  { path: 'fases-page', loadChildren: './fases-page/fases-page.module#FasesPagePageModule' },
  { path: 'congenita-page', loadChildren: './congenita-page/congenita-page.module#CongenitaPagePageModule' },  { path: 'credit-modal', loadChildren: './credit-modal/credit-modal.module#CreditModalPageModule' }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
