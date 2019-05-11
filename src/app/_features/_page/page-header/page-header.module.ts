import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from './page-header.component';
import { MatToolbarModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
  ],
  exports: [
    PageHeaderComponent,
  ],
  declarations: [PageHeaderComponent]
})
export class PageHeaderModule { }