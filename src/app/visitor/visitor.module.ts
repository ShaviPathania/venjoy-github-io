import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DefaultLayoutModule } from '../_design/default-layout/default-layout.module';
import { DefaultLayoutComponent } from '../_design/default-layout/default-layout.component';

@NgModule({
  imports: [
    CommonModule,
    DefaultLayoutModule,
    RouterModule.forChild([
      {
        path: '', component: DefaultLayoutComponent, children: [
          { path: '', loadChildren: '../_features/home-page/home-page.module#HomePageRouterModule' },
          { path: '**', loadChildren: '../_features/post-page/post-page.module#PostPageRouterModule' },
        ]
      }
    ])
  ],
  declarations: []
})
export class VisitorModule { }