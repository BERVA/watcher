import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Movie } from '../movie.model';
import * as fromApp from '../../store/app.reducer'
import { map, Subscription } from 'rxjs';
import { GetPopularMovies } from '../store/movies.actions';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit, OnDestroy {

  movies!: Movie[];
  subs!: Subscription;

  constructor(
    private store: Store<fromApp.AppState>

  ) { }

  ngOnInit(): void {
    this.store.dispatch(GetPopularMovies())
    this.subs = this.store.select('movies').pipe(
      map(movieState => movieState.movies)
    ).subscribe( (movies: Movie[]) => {
      this.movies = movies;
    });

  }

  ngOnDestroy(){
    this.subs.unsubscribe()
  }

}
