import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPostsComponent } from './list-posts.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListPostsComponent]
})
export class ListPostsModule { }

@NgModule({
  imports: [
    ListPostsModule,
    RouterModule.forChild([
      {
        path: '', 
        component: ListPostsComponent
      }
    ])
  ],
})
export class ListPostsRouterModule { }