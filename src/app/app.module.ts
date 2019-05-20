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
    path: '',
    component: DefaultLayoutComponent, children: [
      { 
        path: 'login', 
        loadChildren: './oauth/login/login.module#LoginRouterModule' 
      },
      { 
        path: 'manage-posts',
        canActivate: [OauthGuard], 
        loadChildren: './features/blogging/manage-posts/manage-posts.module#ManagePostsRouterModule'
      },
      { 
        path: 'post-editor',
        canActivate: [OauthGuard], 
        loadChildren: './features/blogging/post-editor/post-editor.module#PostEditorRouterModule'
      },
      { 
        path: 'post-editor/:id',
        canActivate: [OauthGuard], 
        loadChildren: './features/blogging/post-editor/post-editor.module#PostEditorRouterModule'
      },
      { 
        path: '', 
        loadChildren: './features/blogging/posts/posts.module#PostsRouterModule' 
      },
      { 
        path: '**', loadChildren: './features/blogging/post/post.module#PostRouterModule' 
      },
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

