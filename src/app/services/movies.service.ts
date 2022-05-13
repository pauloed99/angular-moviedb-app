import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movies } from '../models/Movies';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  queryParams = new HttpParams().append('api_key', '2c45b2192fa9b9c911ff89bf9cbaf5e9');

  constructor(private httpClient: HttpClient) {
    httpClient.options('https://api.themoviedb.org/3/',{params: this.queryParams});
  }

  getLatestMovies(): Observable<Movies> {
    return this.httpClient.get<Movies>('discover/movie?sort_by=release_date.asc');
  }

  getMoviesByGender(gender: string): Observable<Movies> {
    return this.httpClient.get<Movies>(`discover/movie?with_genres=${gender}`);
  }

  getMoviesByTitle(title: string): Observable<Movies> {
    return this.httpClient.get<Movies>(`search/movie?query=${title}`);
  }

}
