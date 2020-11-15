import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
   { path: '', redirectTo: 'search', pathMatch: 'full' },
   { path: '', loadChildren: () => import('./modules/search/search.module').then((module) => module.SearchModule) },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
