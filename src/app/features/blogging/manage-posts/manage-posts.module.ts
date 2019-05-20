import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagePostsComponent } from './manage-posts.component';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule, MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule, MatButtonModule, MatIconModule, } from '@angular/material'; 

@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule, 
    MatTableModule, 
    MatPaginatorModule, 
    MatSortModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
  ],
  declarations: [ManagePostsComponent]
})
export class ListPostsModule { }

@NgModule({
  imports: [
    ListPostsModule,
    RouterModule.forChild([
      {
        path: '', 
        component: ManagePostsComponent
      }
    ])
  ],
})
export class ListPostsRouterModule { }