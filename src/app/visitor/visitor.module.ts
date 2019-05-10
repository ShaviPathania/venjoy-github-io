import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', loadChildren: '../_features/home/home.module#HomeRouterModule'},
      {path: ':postSlug', loadChildren: '../_features/post/post.module#PostRouterModule'},
    ])
  ],
  declarations: []
})
export class VisitorModule { }