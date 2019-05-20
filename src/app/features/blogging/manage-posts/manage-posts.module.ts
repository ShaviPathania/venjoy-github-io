import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagePostsComponent } from './manage-posts.component';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule, MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule, MatButtonModule, MatIconModule, MatCardModule } from '@angular/material'; 

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
    MatCardModule,
  ],
  declarations: [ManagePostsComponent]
})
export class ManagePostsModule { }

@NgModule({
  imports: [
    ManagePostsModule,
    RouterModule.forChild([
      {
        path: '', 
        component: ManagePostsComponent
      }
    ])
  ],
})
export class ManagePostsRouterModule { }