import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Travel } from '../interfaces/travel';
import { environment } from 'src/environments/environment.development';
@Injectable({
  providedIn: 'root',
})
export class TravelService {
  constructor(private httpClient: HttpClient) {}

  apiUrl = environment.apiUrl;

  getTravelsInPromotion(): Observable<Travel[]> {
    return this.httpClient.get<Travel[]>(
      `${this.apiUrl}` + '/travel/promotion',
    );
  }

  getTravelById(id: number): Observable<Travel> {
    return this.httpClient.get<Travel>(
      `${this.apiUrl}` + '/travel/id/' + id + '',
    );
  }

  searchTravelByContinent(continent: string): Observable<Travel[]> {
    return this.httpClient.get<Travel[]>(
      `${this.apiUrl}` + '/travel/continent2/' + continent + '',
    );
  }

  searchTravelByCountry(country: string): Observable<Travel[]> {
    return this.httpClient.get<Travel[]>(
      `${this.apiUrl}` + '/travel/country2/' + country + '',
    );
  }

  searchTravelByCity(city: string): Observable<Travel[]> {
    return this.httpClient.get<Travel[]>(
      `${this.apiUrl}` + '/travel/city2/' + city + '',
    );
  }
}
