import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostPreviewComponent } from './post-preview.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [
    PostPreviewComponent
  ],
  declarations: [PostPreviewComponent]
})
export class PostPreviewModule { }