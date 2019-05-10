import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { PostPreviewModule } from '../post-preview/post-preview.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    PostPreviewModule,
    HttpClientModule,
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