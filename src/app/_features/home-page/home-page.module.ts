import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { PostsModule } from '../_post/posts/posts.module';
import { PageHeaderModule } from '../_page/page-header/page-header.module';
import { PageFooterModule } from '../_page/page-footer/page-footer.module';

@NgModule({
  imports: [
    CommonModule,
    PostsModule,
    HttpClientModule,
    PageHeaderModule,
    PageFooterModule,
  ],
  declarations: [HomePageComponent]
})
export class HomePageModule { }

@NgModule({
  imports: [
    HomePageModule,
    RouterModule.forChild([
      {path: '', component: HomePageComponent}
    ])
  ]
})
export class HomePageRouterModule { }