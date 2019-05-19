import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultLayoutComponent } from './default-layout.component';
import { DefaultHeaderModule } from '../default-header/default-header.module';
import { DefaultFooterModule } from '../default-footer/default-footer.module';
import { MatSidenavModule } from '@angular/material';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    DefaultHeaderModule,
    DefaultFooterModule,
    MatSidenavModule,
    RouterModule,
  ],
  declarations: [DefaultLayoutComponent]
})
export class DefaultLayoutModule { }