import { FormControl } from '@angular/forms';
import { City, PostCity2 } from './city';

export interface HotelResponse {
  id: number;
  hotelName: string;
  starsNumber: number;
  hotelDescription: string;
  cityModel: City;
}

export interface PostHotel {
  hotelName: string;
  starsNumber: number;
  hotelDescription: string;
  // cityModel: City;
  cityName: string;
  countryName: string;
  continentName: string;
}

export class Hotel implements HotelResponse {
  constructor(
    public id: number,
    public hotelName: string,
    public starsNumber: number,
    public hotelDescription: string,
    public cityModel: City,
  ) {}
}

export class Hotel2 {
  constructor(
    public hotelName: string,
    public starsNumber: number,
    public hotelDescription: string,
    public cityModel: PostCity2,
  ) {}
}


export interface GetHotelResponse {
  hotels: Hotel[];
  totalCount: number;
}
// export interface PostHotelForm {
//   hotelName: FormControl<string>;
//   starsNumber: FormControl<number>;
//   hotelDescription: FormControl<string>;
//   cityModel: FormControl<City>;
// }

export interface PostHotelForm {
  hotelName: FormControl<string>;
  starsNumber: FormControl<number>;
  hotelDescription: FormControl<string>;
  cityName: FormControl<string>;
  countryName: FormControl<string>;
  continentName: FormControl<string>;
}
