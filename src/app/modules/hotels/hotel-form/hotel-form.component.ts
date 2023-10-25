import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsService } from '../../core/services/forms.service';
import { HotelsService } from '../../core/services/hotels.service';
import { Router } from '@angular/router';
import { Observer } from 'rxjs';
import { Hotel, PostHotelForm } from '../../core/interfaces/hotel';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-hotel-form',
  templateUrl: './hotel-form.component.html',
  styleUrls: ['./hotel-form.component.css'],
})
export class HotelFormComponent implements OnInit {
  constructor(
    private formsService: FormsService,
    private hotelServices: HotelsService,
    private route: Router,
  ) {}
  errorMessage = '';
  @Input() editMode = false;
  @Input() hotel!: Hotel;
  @Output() closeDialog = new EventEmitter<void>();
  observer: Observer<unknown> = {
    next: () => {
      this.errorMessage = '';
      if (this.editMode) {
        this.emitCloseDialog();
      }
      this.route.navigate(['/hotels']);
    },
    error: (err) => {
      this.errorMessage = 'Wystąpił błąd';
      console.log(err);
    },
    complete: () => {},
  };

  hotelForm!: FormGroup<PostHotelForm>;
  get controls() {
    return this.hotelForm.controls;
  }

  ngOnInit(): void {
    this.initForm();
  }

  onAddHotel() {
    if (this.editMode) {
      this.hotelServices
        .editHotel(this.hotelForm.getRawValue(), this.hotel.id)
        .subscribe(this.observer);
      return;
    }
    this.hotelServices
      .addHotel(this.hotelForm.getRawValue())
      .subscribe(this.observer);
  }

  getErrorMessage(control: FormControl) {
    return this.formsService.getErrorMessage(control);
  }

  private initForm() {
    this.hotelForm = new FormGroup({
      hotelName: new FormControl(this.editMode ? this.hotel.hotelName : '', {
        validators: [Validators.required],
        nonNullable: true,
      }),
      starsNumber: new FormControl(this.editMode ? this.hotel.starsNumber : 0, {
        validators: [Validators.required],
        nonNullable: true,
      }),
      hotelDescription: new FormControl(
        this.editMode ? this.hotel.hotelDescription : '',
        {
          validators: [
            Validators.required,
            Validators.maxLength(250),
            Validators.minLength(5),
          ],
          nonNullable: true,
        },
      ),

      cityName: new FormControl(
        this.editMode ? this.hotel.cityModel.cityName : '',
        {
          validators: [Validators.required],
          nonNullable: true,
        },
      ),
      countryName: new FormControl(
        this.editMode ? this.hotel.cityModel.countryModel.countryName : '',
        {
          validators: [Validators.required],
          nonNullable: true,
        },
      ),
      continentName: new FormControl(
        this.editMode
          ? this.hotel.cityModel.countryModel.continentModel.continentName
          : '',
        {
          // validators: [Validators.required],
          nonNullable: true,
        },
      ),
    });
  }

  emitCloseDialog() {
    this.closeDialog.emit();
  }
}
