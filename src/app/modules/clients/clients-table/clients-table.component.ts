import { ClientsService } from './../../core/services/clients.service';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Person } from '../../core/interfaces/person';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map, merge, startWith, switchMap } from 'rxjs';
@Component({
  selector: 'app-clients-table',
  templateUrl: './clients-table.component.html',
  styleUrls: ['./clients-table.component.css'],
})
export class ClientsTableComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'lp',
    'personName',
    'personSurname',
    // 'email',
    'buttons',
  ];
  dataSource!: MatTableDataSource<Person>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  // totalCount=0;

  constructor(private clientsService: ClientsService) {}

  ngAfterViewInit(): void {
    this.clientsService.getPersons().subscribe({
      next: (persons) => {
        this.dataSource = new MatTableDataSource<Person>(persons);
        console.log(persons);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

        // this.totalCount = persons.totalCount;
        // this.dataSource = new MatTableDataSource<Person>(persons.clients);

      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
