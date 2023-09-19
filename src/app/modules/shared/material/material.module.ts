import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [],
  imports: [CommonModule, MatToolbarModule, MatButtonModule],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
  ],
})
export class MaterialModule {}
