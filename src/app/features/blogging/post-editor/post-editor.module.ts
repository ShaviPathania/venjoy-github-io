import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostEditorComponent } from './post-editor.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../../design/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
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

