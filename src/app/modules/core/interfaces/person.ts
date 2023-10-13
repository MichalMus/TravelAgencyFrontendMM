import { FormControl } from '@angular/forms';

export interface PersonResponse {
  id: number;
  personName: string;
  personSurname: string;
  personPesel: string;
  // birthdate: Date;
  cityOfLiving: string;
  streetAndNumber: string;
  zipCode: string;
  telephoneNumber: string;
  email: string;
}

export interface PostPerson {
  personName: string;
  personSurname: string;
  personPesel: string;
  cityOfLiving: string;
  streetAndNumber: string;
  zipCode: string;
  telephoneNumber: string;
  email: string;
  // password: string;
}

export class Person implements PersonResponse {
  constructor(
    public id: number,
    public personName: string,
    public personSurname: string,
    public personPesel: string,
    // public birthdate: Date,
    public cityOfLiving: string,
    public streetAndNumber: string,
    public zipCode: string,
    public telephoneNumber: string,
    public email: string,
  ) {}
}
export interface GetClientResponse {
  clients: Person[];
  totalCount: number;
}

export interface PostClientForm {
  personName: FormControl<string>;
  personSurname: FormControl<string>;
  personPesel: FormControl<string>;
  cityOfLiving: FormControl<string>;
  streetAndNumber: FormControl<string>;
  zipCode: FormControl<string>;
  telephoneNumber: FormControl<string>;
  email: FormControl<string>;
  // birthdate: FormControl<string>;
}
