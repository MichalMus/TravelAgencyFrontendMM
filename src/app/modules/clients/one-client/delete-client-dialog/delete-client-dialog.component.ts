import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Person } from 'src/app/modules/core/interfaces/person';
import { ClientsService } from 'src/app/modules/core/services/clients.service';

@Component({
  selector: 'app-delete-client-dialog',
  templateUrl: './delete-client-dialog.component.html',
  styleUrls: ['./delete-client-dialog.component.css'],
})
export class DeleteClientDialogComponent implements OnInit {

  person!: Person;
  errorMessage = '';

  constructor(
    private dialogRef: MatDialogRef<DeleteClientDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: { person: Person },
    private clientService: ClientsService,
    private route: Router,
  ) {}

  ngOnInit(): void {
    this.person = this.data.person;
  }

  onDelete() {
    this.clientService.deleteClient(this.person.id).subscribe({
      next: () => {
        this.dialogRef.close();
        this.route.navigate(['/clients']);
      },
      error: (err) => {
        this.errorMessage = 'Wystąpił błąd';
      },
    });
  }
}
