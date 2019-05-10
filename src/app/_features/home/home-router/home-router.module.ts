import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule }

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: HomeComponent}
    ])
  ],
  declarations: []
})
export class HomeRouterModule { }