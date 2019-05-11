import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from './page-header.component';
import { MatToolbarModule } from '@angular/material';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    RouterModule,
  ],
  exports: [
    PageHeaderComponent,
  ],
  declarations: [PageHeaderComponent]
})
export class PageHeaderModule { }