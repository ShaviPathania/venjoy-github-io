import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostEditorComponent } from './post-editor.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PostEditorComponent]
})
export class PostEditorModule { }

@NgModule({
  imports: [
    PostEditorModule,
    RouterModule.forChild([
      {path: '', component: PostEditorComponent}
    ])
  ],
})
export class PostEditorRouterModule { }

