import { Country, PostCountry2 } from './country';

export interface CityResponse {
  cityName: string;
  countryModel: Country;
}

export interface PostCity {
  cityName: string;
  countryModel: Country;
}

export class PostCity2 {
  constructor(
    public cityName: string,
    public countryModel: PostCountry2,
  ) {}
}

export class City implements CityResponse {
  constructor(
    public id: number,
    public cityName: string,
    public countryModel: Country,
  ) {}
}
