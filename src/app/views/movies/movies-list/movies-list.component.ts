import { Component, OnInit } from '@angular/core';
import { Movies } from 'src/app/models/Movies';

import { Genre, MoviesGenres } from 'src/app/models/movies-genres';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  popularMovies?: Movies;
  genres?: Genre[];

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.moviesService.getPopularMovies().subscribe(
      (data) => this.popularMovies = data,
    );
    this.moviesService.getGenresOfMovies().subscribe(
      (data) => this.genres = data.genres,
    );
  }
  

}
