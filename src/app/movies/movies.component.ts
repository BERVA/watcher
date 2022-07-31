import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromApp from '../store/app.reducer'
import * as MovieDetailActions from './movie-detail/store/movie-detail.actions'
import * as SerieDetailActions from './../series/serie-detail/store/serie-detail.actions'
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  constructor(
    private store: Store<fromApp.AppState>
  ) {
    this.store.dispatch(MovieDetailActions.OnClearMovieDetailState({
      append: {
        videos: {
          results: []
        }
      }
    }))

    this.store.dispatch(SerieDetailActions.OnSerieDetailClear({ append: {}}))
  }
  ngOnInit() {
  }

}
