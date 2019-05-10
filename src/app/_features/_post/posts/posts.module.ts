import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts.component';
import { PostPreviewModule } from '../post-preview/post-preview.module';

@NgModule({
  imports: [
    CommonModule,
    PostPreviewModule
  ],
  exports: [
    PostsComponent
  ],
  declarations: [PostsComponent]
})
export class PostsModule { }