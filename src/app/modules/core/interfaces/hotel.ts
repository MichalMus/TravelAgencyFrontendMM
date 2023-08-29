import { City } from './city';

export interface Hotel {
  id: number;
  hotelName: string;
  starsNumber: number;
  hotelDescription: string;
  cityModel: City;
}
