import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DefaultLayoutModule } from '../_design/default-layout/default-layout.module';
import { DefaultLayoutComponent } from '../_design/default-layout/default-layout.component';

@NgModule({
  imports: [
    CommonModule,
    DefaultLayoutModule,
  ],
  declarations: []
})
export class VisitorModule { }

@NgModule({
  imports: [
    VisitorModule,
    RouterModule.forChild([
      {
        path: '', component: DefaultLayoutComponent, children: [
          { path: '', loadChildren: '../_features/posts/posts.module#PostsRouterModule' },
          { path: '**', loadChildren: '../_features/post/post.module#PostRouterModule' },
        ]
      }
    ])
  ],
})
export class VisitorRouterModule { }