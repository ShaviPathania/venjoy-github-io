import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    PostsComponent
  ],
  declarations: [PostsComponent]
})
export class PostsModule { }