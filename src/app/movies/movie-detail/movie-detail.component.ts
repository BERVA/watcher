import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import {  Observable } from 'rxjs';
import * as fromApp from '../../store/app.reducer'
import * as fromMovieDetailSelectors from "./store/movie-detail.selectors";
import { Movie } from '../movie.model';
import { Cast } from 'src/app/series/serie.model';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  movie$: Observable<Movie>;
  cast$: Observable<Cast[]>;


  constructor(
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit(): void {
    this.movie$ = this.store.pipe(
      select(fromMovieDetailSelectors.getMovieDetail)
    )

    this.cast$ = this.store.pipe(
      select(fromMovieDetailSelectors.getMovieCast)
    )
  }

}
