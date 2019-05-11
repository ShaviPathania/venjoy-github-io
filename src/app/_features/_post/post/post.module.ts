import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LoadingModule } from '../../loading/loading.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    LoadingModule,
  ],
  exports: [
    PostComponent
  ],
  declarations: [PostComponent]
})
export class PostModule { }