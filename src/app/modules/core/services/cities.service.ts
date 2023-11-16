import { HttpClient } from '@angular/common/http';
import { City, CityResponse } from './../interfaces/city';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CitiesService {
  apiUrl = environment.apiUrl;
  constructor(private httpClient: HttpClient) {}

  getCities(): Observable<City[]> {
    return this.httpClient
      .get<CityResponse[]>(`${this.apiUrl}/city/allCities`)
      .pipe(
        map((response) => {
          const cityArr: City[] = response.map(
            ({ id, cityName, countryModel }) =>
              new City(id, cityName, countryModel),
          );
          return cityArr;
        }),
      );
  }
}
