import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer'
import * as MoviDetailActions from '../movies/movie-detail/store/movie-detail.actions'
import * as SerieDetailActions from './serie-detail/store/serie-detail.actions'

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {

  constructor(
    private store: Store<fromApp.AppState>
  ) {
    this.store.dispatch(MoviDetailActions.OnClearMovieDetailState({
      append: {
        videos: {
          results: []
        }
      }
    }));
    this.store.dispatch(SerieDetailActions.OnSerieDetailClear({
      append: {}
    }))
  }

  ngOnInit(): void {

  }

}
