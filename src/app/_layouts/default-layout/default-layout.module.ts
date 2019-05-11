import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultLayoutComponent } from './default-layout.component';
import { PageHeaderModule } from '../../_features/_page/page-header/page-header.module';
import { PageFooterModule } from '../../_features/_page/page-footer/page-footer.module';
import { MatSidenavModule } from '@angular/material';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    PageHeaderModule,
    PageFooterModule,
    MatSidenavModule,
    RouterModule,
  ],
  declarations: [DefaultLayoutComponent]
})
export class DefaultLayoutModule { }