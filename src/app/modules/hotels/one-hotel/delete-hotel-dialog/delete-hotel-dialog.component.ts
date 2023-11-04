import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Hotel } from 'src/app/modules/core/interfaces/hotel';
import { HotelsService } from 'src/app/modules/core/services/hotels.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-hotel-dialog',
  templateUrl: './delete-hotel-dialog.component.html',
  styleUrls: ['./delete-hotel-dialog.component.css'],
})
export class DeleteHotelDialogComponent implements OnInit {
  hotel!: Hotel;
  errorMessage = '';

  constructor(
    private dialogRef: MatDialogRef<DeleteHotelDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: { hotel: Hotel },
    private hotelService: HotelsService,
    private route: Router,
  ) {}

  ngOnInit(): void {
    this.hotel = this.data.hotel;
  }
  onDelete() {
    this.hotelService.deleteHotel(this.hotel.id).subscribe({
      next: () => {
        this.dialogRef.close();
        this.route.navigate(['/hotels']);
      },
      error: (err) => {
        this.errorMessage = 'Wystąpił błąd';
      },
    });
  }
}
