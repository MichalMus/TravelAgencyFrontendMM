import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Hotel } from 'src/app/modules/core/interfaces/hotel';

@Component({
  selector: 'app-edit-hotel-dialog',
  templateUrl: './edit-hotel-dialog.component.html',
  styleUrls: ['./edit-hotel-dialog.component.css'],
})
export class EditHotelDialogComponent {
  constructor(
    private dialogRef: MatDialogRef<EditHotelDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { hotel: Hotel },
  ) {}

  closeDialog() {
    this.dialogRef.close();
  }
}
