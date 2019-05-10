import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostPreviewComponent } from './post-preview.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
  ],
  exports: [
    PostPreviewComponent
  ],
  declarations: [PostPreviewComponent]
})
export class PostPreviewModule { }