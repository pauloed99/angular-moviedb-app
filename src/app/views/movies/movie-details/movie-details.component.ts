import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { MovieDetails } from 'src/app/models/movie-details';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movieDetails?: MovieDetails;
  movieVideoUrl?: string;
  url?: SafeResourceUrl;

  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService,
    private domSanitizer: DomSanitizer,
  ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const movieId = Number(routeParams.get('movie-id'));

    this.moviesService.getMovieDetails(movieId)
      .pipe(take(1))
      .subscribe((data) => this.movieDetails = data);
    
    this.moviesService.getMovieVideos(movieId)
      .pipe(take(1))
      .subscribe((data) => {
        this.movieVideoUrl = `https://youtube.com/embed/${data.results[0].key}`;
        this.url = this.domSanitizer.bypassSecurityTrustResourceUrl(this.movieVideoUrl);
      });
  }

}
