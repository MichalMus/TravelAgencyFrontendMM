import { Airport } from './airport';
import { Hotel } from './hotel';

export interface Travel {
  id: number;
  numberOfDays: number;
  startDate: Date;
  endDate: Date;
  adultPrice: number;
  childPrice: number;
  adultsNumber: number;
  childrenNumber: number;
  promotion: boolean;
  start: Airport;
  hotelModel: Hotel;
}
