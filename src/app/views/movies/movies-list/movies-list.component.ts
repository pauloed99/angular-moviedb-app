import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { Movies } from 'src/app/models/Movies';

import { Genre } from 'src/app/models/movies-genres';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  popularMovies?: Movies;
  genres?: Genre[];
  actionGenreId = 28;

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.filterMoviesByGenre(this.actionGenreId);

    this.moviesService.getGenresOfMovies()
    .pipe(take(1))
    .subscribe(
      (data) => this.genres = data.genres
    );
  }
  
  filterMoviesByGenre(genreId: number) {
    this.moviesService.getMoviesByGenre(genreId)
    .pipe(take(1))
    .subscribe(
      (data) => this.popularMovies = data,
    )
  }

}
