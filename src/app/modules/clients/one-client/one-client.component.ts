import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../../core/services/clients.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Person } from '../../core/interfaces/person';
import { MatDialog } from '@angular/material/dialog';
import { DeleteClientDialogComponent } from './delete-client-dialog/delete-client-dialog.component';

@Component({
  selector: 'app-one-client',
  templateUrl: './one-client.component.html',
  styleUrls: ['./one-client.component.css'],
})
export class OneClientComponent implements OnInit {
  client!: Person;

  constructor(
    private clientService: ClientsService,
    private route: ActivatedRoute,
    private dialog: MatDialog,
  ) {}
  ngOnInit(): void {
    this.route.params
      .pipe(
        switchMap((params) => this.clientService.getOneClient(+params['id'])),
      )
      .subscribe({
        next: (client) => {
          this.client = client;
        },
      });
  }
  openDialog() {
    const dialogRef = this.dialog.open(DeleteClientDialogComponent, {
      data: { person: this.client },
    });
  }
  edit() {}
}
