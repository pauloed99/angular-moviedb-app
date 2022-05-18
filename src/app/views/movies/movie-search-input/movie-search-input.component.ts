import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { Result } from 'src/app/models/Movies';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-search-input',
  templateUrl: './movie-search-input.component.html',
  styleUrls: ['./movie-search-input.component.css']
})
export class MovieSearchInputComponent implements OnInit {
  inputText = '';
  movies?: Result[];

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
  }

  handleInput() {
    if(this.inputText != '') {
      this.moviesService.getMoviesByTitle(this.inputText)
        .pipe(take(1))
        .subscribe((data) => this.movies = data.results);
    }
  }

}
