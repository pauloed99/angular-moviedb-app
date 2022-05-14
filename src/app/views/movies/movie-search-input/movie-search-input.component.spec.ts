import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieSearchInputComponent } from './movie-search-input.component';

describe('MovieSearchInputComponent', () => {
  let component: MovieSearchInputComponent;
  let fixture: ComponentFixture<MovieSearchInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieSearchInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieSearchInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
