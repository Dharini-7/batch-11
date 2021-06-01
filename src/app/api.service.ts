import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getMovie(mName) {
    return this.http.get('http://www.omdbapi.com/?apikey=ab4cae69&s=' + mName);
  }
}
