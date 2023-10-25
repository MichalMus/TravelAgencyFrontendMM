import { Observable, map } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import {
  GetHotelResponse,
  Hotel,
  Hotel2,
  HotelResponse,
  PostHotel,
} from '../interfaces/hotel';
import { City, PostCity2 } from '../interfaces/city';
import { Country, PostCountry2 } from '../interfaces/country';
import { Continent, PostContinent2 } from '../interfaces/continent';
@Injectable({
  providedIn: 'root',
})
export class HotelsService {
  apiUrl = environment.apiUrl;

  city!: PostCity2;
  country!: PostCountry2;
  continent!: PostContinent2;
  hotelDataPost!: Hotel2;

  constructor(private httpClient: HttpClient) {}

  getHotels(
    pageIndex: number,
    itemsPerPage: number,
    sortDirection: string,
    sortColumnName: string,
    value = '',
  ): Observable<GetHotelResponse> {
    let params = new HttpParams()
      .append('page', pageIndex)
      .append('size', itemsPerPage)
      .append('sort', 'ASC')
      .append('column', 'id');
    if (sortColumnName) {
      params = params.set('sort', sortDirection).set('column', sortColumnName);
    }
    if (value) {
      params = params.append('cityName', value);
    }
    return this.httpClient
      .get<GetHotelResponse>(`${this.apiUrl}/hotel/sort`, { params })
      .pipe(
        map((response) => {
          if (!response) return { hotels: [], totalCount: 0 };
          const totalCount = Number(response.totalCount);
          const hotelsArr: Hotel[] = response.hotels.map(
            ({ id, hotelName, starsNumber, hotelDescription, cityModel }) =>
              new Hotel(
                id,
                hotelName,
                starsNumber,
                hotelDescription,
                cityModel,
              ),
          );
          return { hotels: hotelsArr, totalCount };
        }),
      );
  }

  getOneHotel(id: number): Observable<Hotel> {
    return this.httpClient
      .get<HotelResponse>(`${this.apiUrl}/hotel/id/${id}`)
      .pipe(
        map(
          ({ id, hotelName, starsNumber, hotelDescription, cityModel }) =>
            new Hotel(id, hotelName, starsNumber, hotelDescription, cityModel),
        ),
      );
  }

  addHotel(hotelData: PostHotel): Observable<Hotel> {
    this.continent = new PostContinent2(hotelData.cityName);
    this.country = new PostCountry2(hotelData.countryName, this.continent);
    this.city = new PostCity2(hotelData.cityName, this.country);
    this.hotelDataPost = new Hotel2(
      hotelData.hotelName,
      hotelData.starsNumber,
      hotelData.hotelDescription,
      this.city,
    );

    // this.continent.continentName = hotelData.continentName;
    // this.country.countryName = hotelData.countryName;
    // this.country.continentModel = this.continent;
    // this.city.cityName = hotelData.cityName;
    // this.city.countryModel = this.country;
    // this.hotelDataPost.hotelName = hotelData.hotelName;
    // this.hotelDataPost.hotelDescription = hotelData.hotelDescription;
    // this.hotelDataPost.starsNumber = hotelData.starsNumber;
    // this.hotelDataPost.cityModel = this.city;

    return this.httpClient
      .post<HotelResponse>(`${this.apiUrl}/hotel/addHotel`, this.hotelDataPost)
      .pipe(
        map(
          ({ id, hotelName, starsNumber, hotelDescription, cityModel }) =>
            new Hotel(id, hotelName, starsNumber, hotelDescription, cityModel),
        ),
      );
  }

  deleteHotel(id: number): Observable<{}> {
    return this.httpClient.delete(`${this.apiUrl}/hotel/deleteHotel/${id}`);
  }

  editHotel(hotelData: PostHotel, id: number): Observable<Hotel> {
    return this.httpClient
      .put<HotelResponse>(`${this.apiUrl}/hotel/id/${id}`, hotelData)
      .pipe(
        map(
          ({ id, hotelName, starsNumber, hotelDescription, cityModel }) =>
            new Hotel(id, hotelName, starsNumber, hotelDescription, cityModel),
        ),
      );
  }
}
