import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import * as fromApp from '../../store/app.reducer'
import * as fromMovieDetailSelectors from "./store/movie-detail.selectors";
import { AppendToResponseMovie } from 'src/app/shared/shared.model';
import * as MovieDetailActions from './store/movie-detail.actions';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  movie$: Observable<AppendToResponseMovie>;
  trailerKey$: Observable<string>;


  constructor(
    private store: Store<fromApp.AppState>
  ) {
    this.store.dispatch(MovieDetailActions.GetMovieTrailer());
    this.movie$ = this.store.pipe(
      select(fromMovieDetailSelectors.getMovieAllDetail)
    )
    this.trailerKey$ = this.store.pipe(
      select(fromMovieDetailSelectors.getMovieTrailer),
      map(
        key => {
          if (key) {
            return 'https://www.youtube.com/embed/' + key;
          } else {
            return null;
          }
        }
      )
    )

  }

  ngOnInit(): void {

  }

}
