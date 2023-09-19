import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { PostPerson } from '../interfaces/postPerson';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthserviceService {
  constructor(private httpClient: HttpClient) {}
  apiUrl = environment.apiUrl;

  register(postUser: PostPerson): Observable<PostPerson> {
    // return this.httpClient.post(`${this.apiUrl}/personsid/addPerson`, postUser);
    return this.httpClient.post<PostPerson>(
      'http://localhost:8080/personsid/addPerson',
      postUser,
    );
  }
}
