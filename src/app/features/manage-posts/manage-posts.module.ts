import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagePostsComponent } from './manage-posts.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ManagePostsComponent]
})
export class ManagePostsModule { }

@NgModule({
  imports: [
    ManagePostsModule
  ],
})
export class ManagePostsRouterModule { }