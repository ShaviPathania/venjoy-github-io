import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DefaultLayoutComponent, DefaultLayoutModule } from './design/default-layout';
import { OauthGuard } from './oauth/oauth.guard';

import { AppComponent } from './app.component';

const ROUTES = [
  {
    path: 'oauth',
    component: DefaultLayoutComponent,
    children: [
      { path: 'login', loadChildren: './oauth/login/login.module#LoginRouterModule' },
    ],
  },
  {
    path: 'manage-posts',
    component: DefaultLayoutComponent,
    children: [
      { path: '', redirectTo: 'list-posts', pathMatch: 'full'},
      { 
        path: 'list-posts',
        canActivate: [OauthGuard], 
        loadChildren: './features/manage-posts/list-posts/list-posts.module#ListPostsRouterModule'
      },
      { 
        path: 'post-editor',
        canActivate: [OauthGuard], 
        loadChildren: './features/manage-posts/post-editor/post-editor.module#PostEditorRouterModule'
      },
      { 
        path: 'post-editor/:id',
        canActivate: [OauthGuard], 
        loadChildren: './features/manage-posts/post-editor/post-editor.module#PostEditorRouterModule'
      },
    ],
  },
  {
    path: '',
    component: DefaultLayoutComponent, children: [
      { path: '', loadChildren: './features/exhibit-posts/posts/posts.module#PostsRouterModule' },
      { path: '**', loadChildren: './features/exhibit-posts/post/post.module#PostRouterModule' },
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

