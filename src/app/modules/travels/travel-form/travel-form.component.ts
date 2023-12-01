import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsService } from '../../core/services/forms.service';
import { TravelService } from '../../core/services/travel.service';
import { Router } from '@angular/router';
import { PostTravelForm, Travel } from '../../core/interfaces/travel';
import { Observer } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { City } from '../../core/interfaces/city';
import { Country } from '../../core/interfaces/country';
import { Hotel } from '../../core/interfaces/hotel';
import { CitiesService } from '../../core/services/cities.service';
import { HotelsService } from '../../core/services/hotels.service';

@Component({
  selector: 'app-travel-form',
  templateUrl: './travel-form.component.html',
  styleUrls: ['./travel-form.component.css'],
})
export class TravelFormComponent implements OnInit {
  constructor(
    private formsService: FormsService,
    private travelServices: TravelService,
    private hotelService: HotelsService,
    private route: Router,
    private cityService: CitiesService,
  ) {}

  countries!: Country[];
  cities: City[] = [];
  hotels: Hotel[] = [];
  oneHotel!: Hotel;
  errorMessage = '';
  travelForm!: FormGroup<PostTravelForm>;
  @Input() editMode = false;
  @Input() travel!: Travel;
  @Output() closeDialog = new EventEmitter<void>();

  observer: Observer<unknown> = {
    next: () => {
      this.errorMessage = '';
      if (this.editMode) {
        this.emitCloseDialog();
      }
      // this.route.navigate(['/travels']);
    },
    error: (err) => {
      this.errorMessage = 'Wystąpił błąd';
      console.log(err);
    },
    complete: () => {},
  };

  get controls() {
    return this.travelForm.controls;
  }

  ngOnInit(): void {
    this.initForm();
    this.cityService.getCities().subscribe({
      next: (city) => {
        this.cities = city;
      },
    });
  }

  onAddHotel() {
    // if (this.editMode) {
    //   this.travelServices
    //     .editTravel(this.travelForm.getRawValue(), this.travel.id)
    //     .subscribe(this.observer);
    //   return;
    // }
    this.travelServices
      .addTravel(this.travelForm.getRawValue())
      .subscribe(this.observer);
    console.log(this.travelForm.controls);
  }

  getErrorMessage(control: FormControl) {
    return this.formsService.getErrorMessage(control);
  }

  private initForm() {
    this.travelForm = new FormGroup({
      hotelModel: new FormControl(this.oneHotel, { nonNullable: true }),
      startDate: new FormControl('', { nonNullable: true }),
      endDate: new FormControl('', { nonNullable: true }),
      numberOfDays: new FormControl(0, { nonNullable: true }),
      adultPrice: new FormControl(0, { nonNullable: true }),
      adultsNumber: new FormControl(0, { nonNullable: true }),
      childPrice: new FormControl(0, { nonNullable: true }),
      childrenNumber: new FormControl(0, { nonNullable: true }),
      promotion: new FormControl(false, { nonNullable: true }),
      // start: new FormControl(),
    });
  }

  emitCloseDialog() {
    this.closeDialog.emit();
  }

  findHotelsInCity(cityId: number) {
    this.hotels = [];
    console.log(cityId);

    this.hotelService.getHotelsInCity(cityId).subscribe({
      next: (hotelsArr) => {
        this.hotels = hotelsArr;
        console.log(this.hotels);
      },
    });
  }

  chooseHotel(hotelId: number) {
    this.hotelService.getOneHotel(hotelId).subscribe({
      next: (hotel) => {
        this.oneHotel = hotel;
        console.log(this.oneHotel);
      },
    });
  }
}
