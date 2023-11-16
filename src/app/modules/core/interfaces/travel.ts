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

// export class Travel2 {
//   constructor(
//     public hotelName: string,
//     public starsNumber: number,
//     public hotelDescription: string,
//     public cityModel: PostCity2,
//   ) {}
// }

export interface GetTravelResponse {
  travels: Travel[];
  totalCount: number;
}

export interface PostTravelForm {
  hotelName: FormControl<string>;
  startDate: FormControl<number>;
  endDate: FormControl<string>;
  numberOfDays: FormControl<number>;
  adultPrice: FormControl<number>;
  adultsNumber: FormControl<number>;
  childPrice: FormControl<number>;
  childrenNumber: FormControl<string>;
  promotion: FormControl<string>;
  start: FormControl<string>;
}
