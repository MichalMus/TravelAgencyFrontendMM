import {
  PostPerson,
  PersonResponse,
  Person,
  GetClientResponse,
} from './../interfaces/person';
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

  // getPersons(pageIndex: number, itemsPerPage: number): Observable<Person[]> {
  //   const params = new HttpParams()
  //     .append('_page', pageIndex)
  //     .append('size', itemsPerPage);

  // return this.httpClient
  //   .get<PersonResponse[]>(`${this.apiUrl}` + '/personsid/persons', {
  //     params,
  //   })
  //   .pipe(
  //     map((persons) =>
  //       persons.map(
  //         ({
  //           id,
  //           personName,
  //           personSurname,
  //           personPesel,
  //           birthdate,
  //           cityOfLiving,
  //           streetAndNumber,
  //           zipCode,
  //           telephoneNumber,
  //         }) =>
  //           new Person(
  //             id,
  //             personName,
  //             personSurname,
  //             personPesel,
  //             birthdate,
  //             cityOfLiving,
  //             streetAndNumber,
  //             zipCode,
  //             telephoneNumber,
  //           ),
  //       ),
  //     ),
  //   );

  // getPersons(
  //   pageIndex: number,
  //   itemsPerPage: number,
  // ): Observable<GetClientResponse> {
  //   const params = new HttpParams()
  //     .append('_page', pageIndex)
  //     .append('size', itemsPerPage);

  //   return this.httpClient
  //     .get<PersonResponse[]>(`${this.apiUrl}` + '/personsid/persons', {
  //       observe: 'response',
  //       params,
  //     })
  //     .pipe(
  //       map((response) => {
  //         const totalCount = Number(response.headers.get('al'));
  //         if (!response.body) return { clients: [], totalCount: 0 };
  //         const personArr: Person[] = response.body.map(
  //           ({
  //             id,
  //             personName,
  //             personSurname,
  //             personPesel,
  //             birthdate,
  //             cityOfLiving,
  //             streetAndNumber,
  //             zipCode,
  //             telephoneNumber,
  //           }) =>
  //             new Person(
  //               id,
  //               personName,
  //               personSurname,
  //               personPesel,
  //               birthdate,
  //               cityOfLiving,
  //               streetAndNumber,
  //               zipCode,
  //               telephoneNumber,
  //             ),
  //         );
  //         return { clients: personArr, totalCount };
  //       }),
  //     );
  // }

  getPersons(
    pageIndex: number,
    itemsPerPage: number,
    sortDirection: string,
    sortColumnName: string,
    value = '',
  ): Observable<GetClientResponse> {
    let params = new HttpParams()
      .append('page', pageIndex)
      .append('size', itemsPerPage)
      .append('sort', 'ASC')
      .append('column', 'id');
    if (sortColumnName) {
      params = params.set('sort', sortDirection).set('column', sortColumnName);
    }
    if (value) {
      params = params.append('surname', value);
    }
    return this.httpClient
      .get<GetClientResponse>(`${this.apiUrl}` + '/personsid/persons', {
        params,
      })
      .pipe(
        map((response) => {
          if (!response) return { clients: [], totalCount: 0 };
          const totalCount = Number(response.totalCount);
          const personArr: Person[] = response.clients.map(
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
          );
          return { clients: personArr, totalCount };
        }),
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
