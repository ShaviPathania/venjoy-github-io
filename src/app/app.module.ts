import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DefaultLayoutComponent, DefaultLayoutModule } from './design/default-layout';

import { AppComponent } from './app.component';

const ROUTES = [
  {
    path: 'oauth',
    component: DefaultLayoutComponent,
    children: [
      { path: 'login', loadChildren: './features/login/login.module#LoginRouterModule' },
    ],
  },
  {
    path: 'manage-posts',
    component: DefaultLayoutComponent,
    children: [
      { path: '', loadChildren: './features/manage-posts/manage-posts.module#ManagePostsRouterModule' },
    ],
  },
  {
    path: '',
    component: DefaultLayoutComponent, children: [
      { path: '', loadChildren: './features/posts/posts.module#PostsRouterModule' },
      { path: '**', loadChildren: './features/post/post.module#PostRouterModule' },
    ]
  },
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    DefaultLayoutModule,
    RouterModule.forRoot(ROUTES)
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }

