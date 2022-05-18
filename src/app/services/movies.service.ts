import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movies } from '../models/Movies';
import { MoviesGenres } from '../models/movies-genres';
import { MovieDetails } from '../models/movie-details';
import { MovieVideos } from '../models/movie-videos';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  baseUrl = 'https://api.themoviedb.org/3/';
  queryParams = new HttpParams().append('api_key', '2c45b2192fa9b9c911ff89bf9cbaf5e9');

  constructor(private httpClient: HttpClient) {}

  getPopularMovies(): Observable<Movies> {
    return this.httpClient.get<Movies>(
      this.baseUrl + 'movie/popular',
      {params: this.queryParams},
    );
  }

  getMoviesByGenre(genreId: number): Observable<Movies> {
    return this.httpClient.get<Movies>(
      this.baseUrl + `discover/movie?with_genres=${genreId}`,
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

  getMovieDetails(movieId: number): Observable<MovieDetails> {
    return this.httpClient.get<MovieDetails>(
      this.baseUrl + `movie/${movieId}`,
      {params: this.queryParams},
    );
  }

  getMovieVideos(movieId: number): Observable<MovieVideos> {
    return this.httpClient.get<MovieVideos>(
      this.baseUrl + `movie/${movieId}/videos`,
      {params: this.queryParams},
    );
  }

  getMoviesBySearch(movieName: string): Observable<Movies> {
    return this.httpClient.get<Movies>(
      this.baseUrl + `search/movie/query=${movieName}`,
      {params: this.queryParams},
    );
  }
}
