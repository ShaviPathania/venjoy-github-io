import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DefaultLayoutComponent, DefaultLayoutModule } from './_design/default-layout';

import { AppComponent } from './app.component';

const ROUTES = [
  {
    path: 'oauth',
    component: DefaultLayoutComponent,
    children: [
      { path: 'login', loadChildren: './_features/login/login.module#LoginRouterModule' },
    ],
  },
  {
    path: '',
    component: DefaultLayoutComponent, children: [
      { path: '', loadChildren: './_features/posts/posts.module#PostsRouterModule' },
      { path: '**', loadChildren: './_features/post/post.module#PostRouterModule' },
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

