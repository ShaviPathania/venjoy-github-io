import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts.component';
import { PostPreviewModule } from '../post-preview/post-preview.module';
import { LoadingModule } from '../loading/loading.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    PostPreviewModule,
    LoadingModule,
  ],
  exports: [
    PostsComponent
  ],
  declarations: [PostsComponent]
})
export class PostsModule { }

@NgModule({
  imports: [
    PostsModule,
    RouterModule.forChild([
      {path: '', component: PostsComponent}
    ])
  ]
})
export class PostsRouterModule { }