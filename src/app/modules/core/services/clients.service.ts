import { PostPerson, PersonResponse, Person } from './../interfaces/person';
import { Observable, map } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  apiUrl = environment.apiUrl;
  constructor(private httpClient: HttpClient) {}

  getPersons(): Observable<Person[]> {
    const params = new HttpParams().append('_page', 1).append('_limit', 10);
    return this.httpClient
      .get<PersonResponse[]>(`${this.apiUrl}` + '/personsid/allPersons', {
        params,
      })
      .pipe(
        map((persons) =>
          persons.map(
            ({
              id,
              personName,
              personSurname,
              personPesel,
              birthdate,
              cityOfLiving,
              streetAndNumber,
              zipCode,
              telephoneNumber,
            }) =>
              new Person(
                id,
                personName,
                personSurname,
                personPesel,
                birthdate,
                cityOfLiving,
                streetAndNumber,
                zipCode,
                telephoneNumber,
              ),
          ),
        ),
      );
  }
  addPerson(personData: PostPerson): Observable<Person> {
    return this.httpClient
      .post<PersonResponse>(`${this.apiUrl}/personsid/addPerson`, personData)
      .pipe(
        map(
          ({
            id,
            personName,
            personSurname,
            personPesel,
            birthdate,
            cityOfLiving,
            streetAndNumber,
            zipCode,
            telephoneNumber,
          }) =>
            new Person(
              id,
              personName,
              personSurname,
              personPesel,
              birthdate,
              cityOfLiving,
              streetAndNumber,
              zipCode,
              telephoneNumber,
            ),
        ),
      );
  }
}
