import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  MatCardModule, 
  MatFormFieldModule, 
  MatInputModule,
  MatIconModule,
  MatButtonModule,
} from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    MatCardModule, 
    MatFormFieldModule, 
    MatInputModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [
    MatCardModule, 
    MatFormFieldModule, 
    MatInputModule,
    MatIconModule,
    MatButtonModule,
  ],
  declarations: []
})
export class MaterialModule { }