import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', loadChildren: '../_features/home-page/home-page.module#HomePageRouterModule'},
      {path: '**', loadChildren: '../_features/post-page/post-page.module#PostPageRouterModule'},
    ])
  ],
  declarations: []
})
export class VisitorModule { }