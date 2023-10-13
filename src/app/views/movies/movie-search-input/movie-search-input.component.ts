import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { Result } from 'src/app/models/Movies';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-search-input',
  templateUrl: './movie-search-input.component.html',
  styleUrls: ['./movie-search-input.component.css']
})
export class MovieSearchInputComponent {
  movies?: Result[];

  constructor(private moviesService: MoviesService, private router: Router) { }
  
  getOptionText(option: Result) {
    return option?.title;
  }

  handleInput(inputText: any) {
    if(inputText.value != '') {
      this.moviesService.getMoviesByTitle(inputText.value)
        .pipe(take(1))
        .subscribe((data) => this.movies = data.results);
    }
  }

  handleOption(movie: Result) {
    this.router.navigate(['/movie-details', movie.id]);
  }
}
