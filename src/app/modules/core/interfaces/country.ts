import { Continent } from './continent';

export interface Country {
  id: number;
  countryName: string;
  continentModel: Continent;
}
