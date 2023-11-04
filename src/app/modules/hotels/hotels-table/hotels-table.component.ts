import { Component, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import { HotelsService } from '../../core/services/hotels.service';
import { FormControl } from '@angular/forms';
import {
  Subscription,
  debounceTime,
  distinctUntilChanged,
  map,
  merge,
  startWith,
  switchMap,
} from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { Hotel } from '../../core/interfaces/hotel';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-hotels-table',
  templateUrl: './hotels-table.component.html',
  styleUrls: ['./hotels-table.component.css'],
})
export class HotelsTableComponent implements AfterViewInit, OnDestroy {
  totalCount = 0;
  filterValue = new FormControl('', { nonNullable: true });
  sub = new Subscription();
  displayedColumns: string[] = [
    'lp',
    'hotelName',
    'starsNumber',
    'cityModel',
    'buttons',
  ];
  dataSource!: MatTableDataSource<Hotel>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private hotelService: HotelsService) {}

  ngAfterViewInit(): void {
    this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));

    this.sub.add(
      merge(this.sort.sortChange, this.paginator.page)
        .pipe(
          startWith({}),
          switchMap(() => {
            const pageIndex = this.paginator.pageIndex;
            const itemsPerPage = this.paginator.pageSize;
            const sortDirection = this.sort.direction;
            const sortColumnName = this.sort.active;

            return this.hotelService.getHotels(
              pageIndex,
              itemsPerPage,
              sortDirection,
              sortColumnName,
            );
          }),
          map((data) => {
            this.totalCount = data.totalCount;
            return data.hotels;
          }),
        )
        .subscribe((hotels) => {
          this.dataSource = new MatTableDataSource<Hotel>(hotels);
        }),
    );

    this.sub.add(
      this.filterValue.valueChanges
        .pipe(debounceTime(700), distinctUntilChanged())
        .subscribe((value) => {
          const val = value?.trim();
          this.applyFilter(val);
        }),
    );

    // this.clientsService.getPersons().subscribe({
    //   next: (persons) => {
    //     this.dataSource = new MatTableDataSource<Person>(persons);
    //     console.log(persons);
    //     this.dataSource.paginator = this.paginator;
    //     this.dataSource.sort = this.sort;
    //   },
    //   error: (err) => {
    //     console.log(err);
    //   },
    // });
  }

  applyFilter(val: string) {
    const pageIndex = this.paginator.pageIndex;
    const itemsPerPage = this.paginator.pageSize;
    const sortDirection = this.sort.direction;
    const sortColumnName = this.sort.active;

    this.hotelService
      .getHotels(pageIndex, itemsPerPage, sortDirection, sortColumnName, val)
      .subscribe({
        next: (resp) => {
          this.totalCount = resp.totalCount;
          this.dataSource = new MatTableDataSource<Hotel>(resp.hotels);
        },
      });

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
