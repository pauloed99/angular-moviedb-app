import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movies } from '../models/Movies';
import { MoviesGenres } from '../models/movies-genres';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  baseUrl = 'https://api.themoviedb.org/3/';
  queryParams = new HttpParams().append('api_key', '2c45b2192fa9b9c911ff89bf9cbaf5e9');

  constructor(private httpClient: HttpClient) {}

  getPopularMovies(): Observable<Movies> {
    return this.httpClient.get<Movies>(
      this.baseUrl + 'discover/movie?sort_by=popularity.dsc',
      {params: this.queryParams},
    );
  }

  getMoviesByGenre(genre: string): Observable<Movies> {
    return this.httpClient.get<Movies>(
      this.baseUrl + `discover/movie?with_genres=${genre}`,
      {params: this.queryParams},
    );
  }

  getMoviesByTitle(title: string): Observable<Movies> {
    return this.httpClient.get<Movies>(
      this.baseUrl + `search/movie?query=${title}`,
      {params: this.queryParams},
    );
  }

  getGenresOfMovies(): Observable<MoviesGenres> {
    return this.httpClient.get<MoviesGenres>(
      this.baseUrl + 'genre/movie/list',
      {params: this.queryParams},
    );
  }

}
