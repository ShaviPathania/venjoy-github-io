import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { PostsModule } from '../_post/posts/posts.module';

@NgModule({
  imports: [
    CommonModule,
    PostsModule,
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