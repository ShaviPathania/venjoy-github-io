import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultFooterComponent } from './default-footer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    DefaultFooterComponent
  ],
  declarations: [DefaultFooterComponent]
})
export class DefaultFooterModule { }