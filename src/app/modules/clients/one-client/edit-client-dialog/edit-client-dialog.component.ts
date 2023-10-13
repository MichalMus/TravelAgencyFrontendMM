import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Person } from 'src/app/modules/core/interfaces/person';

@Component({
  selector: 'app-edit-client-dialog',
  templateUrl: './edit-client-dialog.component.html',
  styleUrls: ['./edit-client-dialog.component.css'],
})
export class EditClientDialogComponent {
  constructor(
    private dialogRef: MatDialogRef<EditClientDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { person: Person },
  ) {}

  closeDialog(){
    this.dialogRef.close();
  }
}
