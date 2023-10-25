import { Continent, PostContinent2 } from './continent';

export interface CountryResponse {
  id: number;
  countryName: string;
  continentModel: Continent;
}

export interface PostCountry {
  countryName: string;
  continentModel: Continent;
}

export class PostCountry2 {
  constructor(
    public countryName: string,
    public continentModel: PostContinent2,
  ) {}
}

export class Country implements CountryResponse {
  constructor(
    public id: number,
    public countryName: string,
    public continentModel: Continent,
  ) {}
}
