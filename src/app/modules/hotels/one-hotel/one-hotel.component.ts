import { Component, OnInit } from '@angular/core';
import { HotelsService } from '../../core/services/hotels.service';
import { ActivatedRoute, Route } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Hotel } from '../../core/interfaces/hotel';
import { switchMap } from 'rxjs';
import { DeleteHotelDialogComponent } from './delete-hotel-dialog/delete-hotel-dialog.component';
import { EditHotelDialogComponent } from './edit-hotel-dialog/edit-hotel-dialog.component';

@Component({
  selector: 'app-one-hotel',
  templateUrl: './one-hotel.component.html',
  styleUrls: ['./one-hotel.component.css'],
})
export class OneHotelComponent implements OnInit {
  hotel!: Hotel;

  constructor(
    private hotelService: HotelsService,
    private route: ActivatedRoute,
    private dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(switchMap((params) => this.hotelService.getOneHotel(+params['id'])))
      .subscribe({
        next: (hotel) => {
          this.hotel = hotel;
        },
      });
  }

  openDialog() {
    const dialogRef = this.dialog.open(DeleteHotelDialogComponent, {
      data: { hotel: this.hotel },
    });
  }

  openEditDialog() {
    const dialogRef = this.dialog.open(EditHotelDialogComponent, {
      data: { hotel: this.hotel },
      width: '600px',
      maxWidth: '600px'
    });
  }
}
