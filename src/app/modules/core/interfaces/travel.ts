import { FormControl } from '@angular/forms';
import { Airport } from './airport';
import { Hotel } from './hotel';

export interface TravelResponse {
  id: number;
  hotelModel: Hotel;
  startDate: Date;
  endDate: Date;
  numberOfDays: number;
  adultPrice: number;
  adultsNumber: number;
  childPrice: number;
  childrenNumber: number;
  promotion: boolean;
  start: Airport;
}
export interface PostTravel {
  hotelModel: Hotel;
  startDate: string;
  endDate: string;
  numberOfDays: number;
  adultPrice: number;
  adultsNumber: number;
  childPrice: number;
  childrenNumber: number;
  promotion: boolean;
  // start: Airport;
}

export class Travel implements TravelResponse {
  constructor(
    public id: number,
    public hotelModel: Hotel,
    public startDate: Date,
    public endDate: Date,
    public numberOfDays: number,
    public adultPrice: number,
    public adultsNumber: number,
    public childPrice: number,
    public childrenNumber: number,
    public promotion: boolean,
    public start: Airport,
  ) {}
}

export interface GetTravelResponse {
  travels: Travel[];
  totalCount: number;
}

export interface PostTravelForm {
  hotelModel: FormControl<Hotel>;
  startDate: FormControl<string>;
  endDate: FormControl<string>;
  numberOfDays: FormControl<number>;
  adultPrice: FormControl<number>;
  adultsNumber: FormControl<number>;
  childPrice: FormControl<number>;
  childrenNumber: FormControl<number>;
  promotion: FormControl<boolean>;
  // start: FormControl<string>;
}
