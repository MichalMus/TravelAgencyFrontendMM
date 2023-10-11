import { FormControl } from "@angular/forms";

export interface PersonResponse {
  id: number;
  personName: string;
  personSurname: string;
  personPesel: string;
  birthdate: Date;
  cityOfLiving: string;
  streetAndNumber: string;
  zipCode: string;
  telephoneNumber: number;
}

export interface PostPerson {
  personName: string;
  personSurname: string;
  email: string;
  telephoneNumber: string;
  cityOfLiving: string;
  zipCode: string;
  streetAndNumber: string;
  personPesel: string;
  // password: string;
}

export class Person implements PersonResponse {
  constructor(
    public id: number,
    public personName: string,
    public personSurname: string,
    public personPesel: string,
    public birthdate: Date,
    public cityOfLiving: string,
    public streetAndNumber: string,
    public zipCode: string,
    public telephoneNumber: number,
  ) {}
}
export interface GetClientResponse {
  clients: Person[];
  totalCount: number;
}

export interface PostClientForm {
  personName: FormControl<string>;
  personSurname: FormControl<string>;
  email: FormControl<string>;
  telephoneNumber: FormControl<string>;
  cityOfLiving: FormControl<string>;
  zipCode: FormControl<string>;
  streetAndNumber: FormControl<string>;
  personPesel: FormControl<string>;
  // birthdate: FormControl<string>,
}
