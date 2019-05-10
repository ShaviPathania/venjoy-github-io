import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { PostPreviewModule } from '../post-preview/post-preview.module';

@NgModule({
  imports: [
    CommonModule,
    PostPreviewModule,
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }

@NgModule({
  imports: [
    HomeModule,
    RouterModule.forChild([
      {path: '', component: HomeComponent}
    ])
  ]
})
export class HomeRouterModule { }