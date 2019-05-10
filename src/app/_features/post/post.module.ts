import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
  ],
  declarations: [PostComponent]
})
export class PostModule { }

@NgModule({
  imports: [
    PostModule,
    RouterModule.forChild([
      {path: '', component: PostComponent}
    ])
  ]
})
export class PostRouterModule { }
