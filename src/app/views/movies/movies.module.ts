import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies.component';
import { MoviesListComponent } from './movies-list/movies-list.component';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MovieSearchInputComponent } from './movie-search-input/movie-search-input.component';

@NgModule({
  declarations: [
    MoviesComponent,
    MoviesListComponent,
    MovieSearchInputComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    FormsModule, 
  ]
})
export class MoviesModule { }
