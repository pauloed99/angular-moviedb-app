import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies.component';
import { MoviesListComponent } from './movies-list/movies-list.component';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MovieSearchInputComponent } from './movie-search-input/movie-search-input.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {MatIconModule} from '@angular/material/icon';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    MoviesComponent,
    MoviesListComponent,
    MovieSearchInputComponent,
    MovieDetailsComponent,
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    FormsModule, 
    MatInputModule,
    MatFormFieldModule,
    MatIconModule, 
    MatAutocompleteModule,
    MatButtonModule, 
  ]
})
export class MoviesModule { }
