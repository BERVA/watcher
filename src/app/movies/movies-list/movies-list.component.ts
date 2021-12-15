import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Movie } from '../movie.model';
import * as fromApp from '../../store/app.reducer'
import { Observable } from 'rxjs';
import { GetPopularMovies } from '../store/movies.actions';
import * as fromMoviesSelector from '../store/movies.selectors';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit, OnDestroy {

  movies$: Observable<Movie[]>;

  constructor(
    private store: Store<fromApp.AppState>

  ) { }

  ngOnInit(): void {
    this.store.dispatch(GetPopularMovies())
    this.movies$ = this.store.pipe(
      select(fromMoviesSelector.getPopularMovies)
    )
  }

  ngOnDestroy(){
  }

}
